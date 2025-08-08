import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res);
                        navigate('/')
                    })
            })


    }
    return (
        <div className=''>
            <div className='divider'></div>
            <button onClick={handleGoogleSignIn} className="btn btn-soft">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;