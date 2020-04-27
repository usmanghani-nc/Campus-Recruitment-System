import React from 'react';

// IMPORTS..
import logo from '../../../../assets/img/logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// SCSS...
import classes from '../header.module.scss';

const HeaderStart = () => {
  const user = useSelector((state) => state.authReducer.currnetuser);
  const company = useSelector((state) => state.authReducer.company);

  return (
    <React.Fragment>
      {user ? (
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
                  {company ? <Link to="/students">Students</Link> : null}
                  <Link to="companys">Companys</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default HeaderStart;
