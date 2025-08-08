import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaTable, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { MdOutlineReviews } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { IoMailSharp } from 'react-icons/io5';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const baseLinkClasses =
        'flex items-center p-3 rounded-lg uppercase transition-colors duration-200';
    const activeClasses = 'text-white';
    const inactiveClasses =
        'text-black hover:text-white';
    // ToDo: get isAdmin value from the database------
    const [isAdmin] = useAdmin()

    return (
        <div className="min-h-screen flex bg-base-200">
            {/* Sidebar */}
            <aside className="w-64 bg-orange-400 p-5 shadow-lg hidden md:block">
                <Link to={'/'}>
                    <p className='text-black text-xl font-bold uppercase'>Bistro Boss</p>
                    <p className='text-black text-xl font-bold uppercase'>Restaurant</p>
                </Link>
                <ul className="menu space-y-2">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/adminHome"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaHome></FaHome> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addItems"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaUtensils></FaUtensils> Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageItems"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaList></FaList> Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageBooking"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaBook></FaBook> Manage Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allUsers"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaUsers></FaUsers> All Users
                                    </NavLink>
                                </li>
                            </> : <>
                                <li>
                                    <NavLink
                                        to="/dashboard/userHome"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/reservation"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaCalendarAlt></FaCalendarAlt> Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaBangladeshiTakaSign></FaBangladeshiTakaSign> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/cart"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaShoppingCart></FaShoppingCart> My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addReview"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <MdOutlineReviews></MdOutlineReviews> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myBooking"
                                        className={({ isActive }) =>
                                            `${baseLinkClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        <FaTable></FaTable> my booking
                                    </NavLink>
                                </li>
                            </>
                    }


                    <div className='divider'></div>
                    <li>
                        <NavLink to='/' className={`${baseLinkClasses}`}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className={`${baseLinkClasses}`}>
                            <TiThMenu></TiThMenu>
                            Our Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop/salad' className={`${baseLinkClasses}`}>
                            <FaShoppingBag></FaShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={`${baseLinkClasses}`}>
                            <IoMailSharp></IoMailSharp>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-slate-50 p-4">
                <div>
                    <Outlet></Outlet>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;