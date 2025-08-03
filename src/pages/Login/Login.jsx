import coverLogin from '../../assets/others/authentication2.png'
import bgLogin from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useHelmet from '../../hooks/useHelmet';


const Login = () => {
    const helmet = useHelmet('Login')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    
    
    const { signInUser } = useContext(AuthContext)

    const [disabled, setDisabled] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
        .then((result) => {
            const user = result.user;

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, {replace: true})
        })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
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
                <div className="hero-content flex gap-20 flex-col md:flex-row shadow-2xl ">
                    <div className='hidden sm:block'>
                        <img src={coverLogin} alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card w-full max-w-sm shrink-0">
                        <div className="card-body">
                            <h2 className='text-center text-4xl font-bold text-yellow-400'>Login</h2>
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

                                {/* todo: disabled true for recaptcha */}

                                <input disabled={false} className="btn btn-neutral btn-outline  border rounded-xl uppercase text-xl mr-4" type="submit" value={"Login"} />

                                <p className='text-lg text-yellow-400'>New here? Please <Link to={"/signup"}><span className='font-semibold'>Sign Up.</span></Link></p>

                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;