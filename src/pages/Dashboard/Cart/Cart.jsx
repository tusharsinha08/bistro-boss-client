import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div>
            <SectionTitle heading='Wanna add more' subHeading='My Cart'></SectionTitle>
            <div className='bg-white p-8'>
                <div className='flex justify-evenly mb-4'>
                    <h2 className='text-2xl font-semibold uppercase'>Total Orders: {cart.length}</h2>
                    <h2 className='text-2xl font-semibold uppercase'>Total price: ${totalPrice}</h2>
                    {
                        cart.length ? <Link to={'/dashboard/payment'}>
                            <button className='btn bg-orange-400'>Pay</button>
                        </Link> : 
                            <button disabled className='btn bg-orange-400'>Pay</button>
                    }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-orange-400'>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, i) =>
                                        <tr key={item._id}>
                                            <th>
                                                <p>{i + 1}</p>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="h-12 w-12">
                                                            <img
                                                                src={item.image} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button
                                                    onClick={() => handleDeleteItem(item._id)}
                                                    className='text-4xl text-red-600'>
                                                    <MdDeleteForever></MdDeleteForever>
                                                </button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;