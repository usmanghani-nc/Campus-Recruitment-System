import React from 'react';

// SCSS..
import classes from './loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.bookPreload}>
      <div className={classes.book}>
        <div className={classes.bookPage}></div>
        <div className={classes.bookPage}></div>
        <div className={classes.bookPage}></div>
      </div>
    </div>
  );
};

export default Loader;
