import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <progress className="progress w-56"></progress>
            </div>
        </>

    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;