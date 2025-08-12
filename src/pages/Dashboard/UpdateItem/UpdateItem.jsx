import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, category, price, recipe, _id, image } = useLoaderData()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        // console.log("Form Data Submitted:", data);

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category.toLowerCase(),
                price: data.price
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            // console.log(menuRes.data);
            if (menuRes.data.modifiedCount) {
                reset()
                // show success pop-up
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menuItem.name} Updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div className="w-full min-h-screen bg-white  items-center  p-4">
            <SectionTitle heading={"Update Item"} subHeading={"Refresh Info"}></SectionTitle>
            <div className="card w-full max-w-3xl mx-auto bg-base-300">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* Recipe Name Input */}
                    <div className="form-control border-0 space-y-2">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder={"e.g., Spaghetti Carbonara"}
                            className="input w-full"
                            {...register("name", { required: "Recipe name is required" })}
                        />
                        {errors.recipeName && <span className="text-error text-xs mt-1">{errors.recipeName.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Category Select */}
                        <div className="form-control border-0 space-y-2">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <select
                                className="select select-bordered"
                                defaultValue={category}
                                {...register("category", { required: "Please select a category" })}
                            >
                                <option value="" disabled>Pick a category</option>
                                <option value="Appetizer">Salad</option>
                                <option value="Main Course">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Salad">Pizza</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                            {errors.category && <span className="text-error text-xs mt-1">{errors.category.message}</span>}
                        </div>

                        {/* Price Input */}
                        <div className="form-control border-0 space-y-2">
                            <label className="label">
                                <span className="label-text font-bold">Price ($)</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="e.g., 15.50"
                                step="0.01"
                                className="input w-full"
                                {...register("price", { required: "Price is required", valueAsNumber: true })}
                            />
                            {errors.price && <span className="text-error text-xs mt-1">{errors.price.message}</span>}
                        </div>
                    </div>

                    {/* Recipe Details Textarea */}
                    <div className="form-control border-0 space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details</span>
                        </label>
                        <textarea
                            defaultValue={recipe}
                            className="textarea w-full h-24 resize-none"
                            placeholder="Describe the recipe..."
                            {...register("recipe", { required: "Recipe details are required" })}
                        ></textarea>
                        {errors.recipeDetails && <span className="text-error text-xs mt-1">{errors.recipeDetails.message}</span>}
                    </div>

                    {/* Image of the item */}
                    <div className="form-control border-0 flex flex-col space-y-2">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Image</span>
                        </label>
                        <input
                            type="file"
                            className="file-input border-0"
                            {...register("image", { required: "An image file is required" })}
                        />
                        {errors.imageFile && <span className="text-error text-xs mt-1">{errors.imageFile.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-lime-300">
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;