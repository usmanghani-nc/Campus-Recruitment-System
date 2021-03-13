import React from 'react';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Header from '../Layout/Header/Header';
import Page404 from '../Pages/404';
import { Switch, Route, useLocation } from 'react-router-dom';

const PublicRoutes = ({}) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={pathname === '/login' ? '/login' : '/'} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
};

export default PublicRoutes;
