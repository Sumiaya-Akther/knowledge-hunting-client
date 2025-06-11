import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loading from '../components/loading/Loading';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    //console.log(user, loading);
    const location = useLocation();
    //console.log(location);
     if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;