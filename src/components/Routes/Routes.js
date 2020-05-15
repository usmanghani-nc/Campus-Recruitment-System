import React from 'react';

// IMPORTS...
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// PAGES ..
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';
import AdminIndex from '../Pages/Admin/AdminIndex';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Companys from '../Pages/Companys/Companys';
import Students from '../Pages/Studens/Students';
import Colleges from '../Pages/Colleges/Colleges';
import ComapnyVacancy from '../Pages/Comapny_Vacancy/ComapnyVacancy';
import Profile from '../Pages/Profile/Profile';

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/adminindex" component={AdminIndex} />
        <PrivateRoute path="/companys" component={Companys} />
        <PrivateRoute path="/colleges" component={Colleges} />
        <PrivateRoute path="/ComapnyVacancy" component={ComapnyVacancy} />
        <PrivateRoute path="/students/:id" component={Students} />
        <PrivateRoute path="/Profile/:id" component={Profile} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Routes;
