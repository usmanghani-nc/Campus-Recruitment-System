import React from 'react';

// IMPORTS..
import logo from '../../../../assets/img/logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// SCSS...
import classes from '../header.module.scss';

const HeaderStart = () => {
  return (
    <div className={classes.HeaderStart}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className="px-0">
          <Link to="/">
            <div className="logo-area">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/students">Students</Link>
              <Link to="companys">Companys</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default HeaderStart;
