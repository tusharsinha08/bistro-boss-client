import coverLogin from '../../assets/others/authentication2.png'
import bgLogin from '../../assets/others/authentication.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';



const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
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
                            <h2 className='text-center text-4xl font-bold'>Sign Up</h2>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}


                                <label className="label">Email</label>
                                <input type="email" {...register("email",  { required: true })} name='email' className="input" placeholder="email@example.com" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}

                                <label className="label">Password</label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input" placeholder="Enter Password" />
                                {errors.firstName?.type === "required" && (
                                    <p className='text-red-600' role="alert">Password is required</p>
                                )}
                                {errors.firstName?.type === "minLength" && (
                                    <p className='text-red-600' role="alert">Password must be 6 characters</p>
                                )}

                                <input className="btn btn-neutral btn-outline border-1 rounded-xl  uppercase text-xl mt-4 mr-4" type="submit" value={"Sign Up"}/>

                                <p className=' text-lg'>Already have an account? Please <Link to={"/login"}><span className='font-semibold'>Login.</span></Link></p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;