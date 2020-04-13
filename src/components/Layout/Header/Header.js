import React from 'react';

// CHILD COMPONENT..
import Toolbar from './Toolbar/Toolbar';
import HeaderStart from './HeaderStart/HeaderStart';
import Slide from './Slider/Slide';

// SCSS..
import classes from './header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <Toolbar />
      <HeaderStart />
      <Slide />
    </div>
  );
};

export default Header;
