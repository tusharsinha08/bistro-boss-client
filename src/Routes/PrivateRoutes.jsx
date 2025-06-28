import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;