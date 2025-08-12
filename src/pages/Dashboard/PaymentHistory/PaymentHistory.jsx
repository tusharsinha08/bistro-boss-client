import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <progress className="progress w-56"></progress>
            </div>
        </>

    }

    return (
        <div>
            <div className='bg-white p-8'>
                <div className='flex justify-evenly mb-4'>
                    <h2 className='text-2xl font-semibold uppercase'>Total Payments: {payments.length}</h2>
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
                                    <th>Item Name</th>
                                    <th>Transaction Id</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, i) =>
                                        <tr key={payment._id}>
                                            <th>
                                                <p>{i + 1}</p>
                                            </th>
                                            <td>
                                                <p>{payment.name}</p>
                                            </td>
                                            <td>
                                                <p>{payment.transactionId}</p>
                                            </td>
                                            <td>
                                                <p>{payment.status}</p>
                                            </td>
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

export default PaymentHistory;