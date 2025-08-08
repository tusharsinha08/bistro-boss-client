import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';


// todo : add publishable key-----
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Make Payment'} subHeading={'Pay fast to eat'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;