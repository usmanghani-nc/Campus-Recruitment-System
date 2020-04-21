import React from 'react';

// IMPORTS...
import { Switch, Route } from 'react-router-dom';

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

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/adminindex" component={AdminIndex} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/companys" component={Companys} />
        <Route path="/students" component={Students} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Routes;
