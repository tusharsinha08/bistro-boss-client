import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                // console.log(res.data);
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div>
                <SectionTitle heading='Manage all users' subHeading='How Many?'></SectionTitle>
                <div className='bg-white p-8'>
                    <div className='flex justify-evenly mb-4'>
                        <h2 className='text-2xl font-semibold uppercase'>Total Users: {users.length}</h2>
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) =>
                                            <tr key={user._id}>
                                                <th>
                                                    <p>{i + 1}</p>
                                                </th>
                                                <td>
                                                    <p>{user.name}</p>
                                                </td>
                                                <td>
                                                    <p>{user.email}</p>
                                                </td>
                                                <td>
                                                    {
                                                        user.role === 'admin' ? 'Admin' :
                                                            <button
                                                                onClick={() => handleMakeAdmin(user)}
                                                                className="text-4xl p-1 text-white rounded-md bg-orange-400">
                                                                <FaUserCog></FaUserCog>
                                                            </button>
                                                    }
                                                </td>
                                                <th>
                                                    <button
                                                        onClick={() => handleDeleteUser(user)}
                                                        className='text-4xl text-red-600'>
                                                        <MdDeleteForever></MdDeleteForever>
                                                    </button>
                                                </th>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;