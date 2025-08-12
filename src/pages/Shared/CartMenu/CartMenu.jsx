import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const CartMenu = ({ item }) => {
    const { name, recipe, image, price, _id } = item
    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()


    const handleAddToCart = () => {
        if (user && user.email) {
            // send item cart to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 500
                        });
                        refetch()
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card bg-gray-100 shadow-sm rounded-xl h-full shadow-yellow-700">
                <figure>
                    <div className='relative'>
                        <p className='absolute bg-black text-white p-2 rounded-md top-2 right-2'>${price}</p>
                        <img
                            src={image}
                            alt="Shoes" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className='card-actions justify-center'>
                        <button onClick={handleAddToCart} className="btn btn-neutral btn-outline text-yellow-500 border-yellow-500 hover:border-none border-0 border-b-4 mt-4 rounded-xl  uppercase text-xl">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartMenu;