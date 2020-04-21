import React from 'react';

import SidePanel from './SidePanel/SidePanel';
import Routes from './AdminRoutes/AdminRoutes';

const AdminIndex = () => {
  return (
    <div>
      <SidePanel>
        <Routes />
      </SidePanel>
    </div>
  );
};

export default AdminIndex;
