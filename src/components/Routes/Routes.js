import React from 'react';

// IMPORTS...
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// PAGES ..
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';
import AdminIndex from '../Pages/Admin/AdminIndex';
import Companys from '../Pages/Companys/Companys';
import Students from '../Pages/Studens/Students';
import Colleges from '../Pages/Colleges/Colleges';
import ComapnyVacancy from '../Pages/Comapny_Vacancy/ComapnyVacancy';
import Profile from '../Pages/Profile/Profile';
import Page404 from '../Pages/404';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/adminindex" component={AdminIndex} />
        <PrivateRoute path="/companys" component={Companys} />
        <PrivateRoute path="/colleges" component={Colleges} />
        <PrivateRoute path="/ComapnyVacancy" component={ComapnyVacancy} />
        <PrivateRoute path="/students/:id" component={Students} />
        <PrivateRoute path="/Profile/:id" component={Profile} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="*" component={Page404} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
