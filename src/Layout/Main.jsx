import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('/login')
    const isSignUp = location.pathname.includes('/signup')
    
    return (
        <div>
            { (isLogin || isSignUp) || <Navbar></Navbar>}
            <Outlet></Outlet>
            { (isLogin || isSignUp) || <Footer></Footer>}
        </div>
    );
};

export default Main;