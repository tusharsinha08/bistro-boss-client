import coverLogin from '../../assets/others/authentication2.png'
import bgLogin from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useHelmet from '../../hooks/useHelmet';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const helmet = useHelmet('Sign UP')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    navigate('/')
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })


    }

    return (
        <div>
            {helmet}
            <div className="hero min-h-screen relative"
                style={{
                    backgroundImage:
                        `url(${bgLogin})`,
                }}
            >
                <div className='absolute top-0 p-4 z-50'>
                    <Link to={'/'}>
                        <p className='text-yellow-400 text-xl font-bold uppercase'>Bistro Boss</p>
                        <p className='text-yellow-400 text-xl font-bold uppercase'>Restaurant</p>
                    </Link>
                </div>
                <div className="hero-content flex gap-20 flex-row-reverse shadow-2xl">
                    <div className='sm:block hidden'>
                        <img src={coverLogin} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card w-full max-w-sm shrink-0">
                        <div className="card-body">
                            <h2 className='text-center text-4xl font-bold text-yellow-400'>Sign Up</h2>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}


                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="email@example.com" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}

                                <label className="label">Photo URL</label>
                                <input type="text" {...register("photoURL", { required: true })} className="input" placeholder="photoURL" />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}

                                <label className="label">Password</label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input" placeholder="Enter Password" />
                                {errors.password?.type === "required" && (
                                    <p className='text-red-600' role="alert">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-600' role="alert">Password must be 6 characters</p>
                                )}

                                <input className="btn btn-neutral btn-outline border-1 rounded-xl  uppercase text-xl mt-4 mr-4" type="submit" value={"Sign Up"} />

                                <p className='text-yellow-400 text-lg'>Already have an account? Please <Link to={"/login"}><span className='font-semibold'>Login.</span></Link></p>
                                
                                <SocialLogin></SocialLogin>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;