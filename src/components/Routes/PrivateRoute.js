import React from 'react';

// IMPORTS..
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../Auth';

// import Loader from './components/Layout/Loader/Loader';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(Auth.getAuth());
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
