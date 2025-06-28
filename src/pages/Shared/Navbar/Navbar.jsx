import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log("user", user);
    
    const navOptions = <>
        <li className='hover:text-yellow-400'><Link to='/'>Home</Link></li>
        <li className='hover:text-yellow-400'><Link to="/menu">Our Menu</Link></li>
        <li className='hover:text-yellow-400'><Link to="/shop/salad">Our Shop</Link></li>


        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button>
            </> : <>
                <li className='hover:text-yellow-400'><Link to="/login">LOGIN</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-black fixed z-10 bg-opacity-30 text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-30 rounded-box w-52 font-bold">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'}>
                    <p className='text-yellow-400 text-xl font-bold uppercase'>Bistro Boss</p>
                    <p className='text-yellow-400 text-xl font-bold uppercase'>Restaurant</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;