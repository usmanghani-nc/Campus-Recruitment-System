import React from 'react';

// IMPORTS...
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminHome from '../AdminHome/AdminHome';
import Company from '../AdminHome/Company';
import Student from '../AdminHome/Student';
import EditCompany from '../AdminHome/EditCompany';
import EditStudent from '../AdminHome/EditStudent';

const AdminRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        {/* <Route path="/adminindex" component={AdminHome} /> */}
        <Route path={`${path}/admincompany`} component={Company} />
        <Route path={`${path}/adminstudent`} component={Student} />
        <Route path={`${path}/editcompany/:id`} component={EditCompany} />
        <Route path={`${path}/editstudent/:id`} component={EditStudent} />
      </Switch>
    </React.Fragment>
  );
};

export default AdminRoutes;
