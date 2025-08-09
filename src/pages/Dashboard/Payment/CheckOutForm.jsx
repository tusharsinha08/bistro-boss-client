import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const { user } = useAuth()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    })

    const handleSubmit = async event => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error)
            setError(error.message)
        }
        else {
            console.log("payment Method", paymentMethod)
            setError('')
        }

        // confirm payment -------------
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
            
        })

        if(confirmError){
            console.log("confirm error: ", confirmError);
        }
        else {
            console.log('payment intent: ', paymentIntent)
            if(paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(), // utc date convert. use moment js
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending',
                    transactionId: paymentIntent.id
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log("payment saved", res.data)
            }
        }
    }

    return (
        <form className='p-4' onSubmit={handleSubmit}>
            <CardElement className='mb-4'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className="p-2 px-3 btn btn-primary text-white rounded-md font-semibold"
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p>
                <span className='text-error m-2'>{error}</span>
            </p>
            {
                transactionId ? <p>Transaction Id:<span className='text-green-400'> {transactionId}</span></p> : ""
            }
        </form>
    );
};

export default CheckOutForm;