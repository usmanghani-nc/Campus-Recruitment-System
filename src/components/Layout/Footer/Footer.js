import React from 'react';

// IMPORTS...
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

// SCSS...
import classes from './footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
