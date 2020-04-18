import React from 'react';

// CHILD COMPONENT..
import Toolbar from './Toolbar/Toolbar';
import HeaderStart from './HeaderStart/HeaderStart';

// SCSS..
import classes from './header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <Toolbar />
      <HeaderStart />
    </div>
  );
};

export default Header;
