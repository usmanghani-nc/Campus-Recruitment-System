import React from 'react';
import { Link } from 'react-router-dom';
// SCSS...
import classes from '../footer.module.scss';

const FooterBottom = () => {
  return (
    <div className={classes.footerBottom}>
      <p>
        © {new Date().getFullYear()}{' '}
        <Link to="https://www.linkedin.com/in/muhammad-usman-ghani-92a97b195/">
          Develop by M.Usman ghani
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
