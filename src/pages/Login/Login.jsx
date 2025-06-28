import coverLogin from '../../assets/others/authentication2.png'
import bgLogin from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const [disabled, setDisabled] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password);
        // signInUser(email, password)
        // .then((result) => {
        //     const user = result.user;
        //     Swal.fire("SweetAlert2 is working!");

        //     console.log(user);


        // });
        try {
            const result = signInUser(email, password);
            

            Swal.fire("Login Successful!");
        } catch (err) {
            console.error(err);
            Swal.fire("Login Failed", err.message, "error");
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
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
                <div className="hero-content flex gap-20 flex-col md:flex-row shadow-2xl ">
                    <div className='hidden sm:block'>
                        <img src={coverLogin} alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card w-full max-w-sm shrink-0">
                        <div className="card-body">
                            <h2 className='text-center text-4xl font-bold'>Login</h2>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="email@example.com" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div>
                                    <LoadCanvasTemplate />
                                </div>
                                <div className='relative'>
                                    <input
                                        type="text"
                                        name='captcha'
                                        className="input"
                                        onBlur={handleValidateCaptcha}
                                        placeholder="Type the captcha above"
                                    />

                                    {/* <button onClick={handleValidateCaptcha}
                                        className='btn btn-neutral btn-outline rounded-lg border uppercase btn-xs mt-1'>
                                        validate {isValidCaptcha ? '✅' : '❌'}
                                    </button> */}
                                </div>


                                <input disabled={disabled} className="btn btn-neutral btn-outline  border-1 rounded-xl uppercase text-xl mr-4" type="submit" value={"Login"} />

                                <p className=' text-lg'>New here? Please <Link to={"/signup"}><span className='font-semibold'>Sign Up.</span></Link></p>

                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;