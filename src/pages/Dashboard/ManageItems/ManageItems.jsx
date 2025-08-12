import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    // console.log(menu);


    const handleDeleteItem = item => {
        // console.log("item", item);

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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle heading='Manage All Items' subHeading='Hurry Up!'></SectionTitle>
            <div className='bg-white p-8'>
                <div className='flex justify-evenly mb-4'>
                    <h2 className='text-2xl font-semibold uppercase'>Total Items: ${menu.length}</h2>
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
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, i) =>
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
                                            <td>
                                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                                    <button
                                                        className='text-4xl text-white p-1 rounded bg-orange-400'>
                                                        <FaEdit></FaEdit>
                                                    </button>
                                                </Link>
                                            </td>
                                            <th>
                                                <button
                                                    onClick={() => handleDeleteItem(item)}
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

export default ManageItems;