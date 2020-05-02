import React from 'react';

// IMPORTS..
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Loader from './components/Layout/Loader/Loader';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const currUser = useSelector(state => state && state.authReducer && state.authReducer.currnetuser)
 
    return (
        <Route {...rest} render={(props) => (
            currUser ? <Component {...props} /> : <Redirect to="/login" />
        )} />
    )
};

export default PrivateRoute;