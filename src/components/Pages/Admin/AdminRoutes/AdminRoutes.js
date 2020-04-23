import React from 'react';

// IMPORTS...
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminHome from '../AdminHome/AdminHome';
import Company from '../AdminHome/Company';
import Student from '../AdminHome/Student';

const AdminRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/AdminIndex/" component={AdminHome} />
        <Route path={`${url}/admincompany`} component={Company} />
        <Route path={`${url}/adminstudent`} component={Student} />
      </Switch>
    </React.Fragment>
  );
};

export default AdminRoutes;
