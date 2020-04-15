import React, { useState } from 'react';

// IMPORTS...
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { auth } from '../../../../firebase/config';

// SCSS...
import classes from '../header.module.scss';

const Toolbar = () => {
  const user = useSelector((state) => state.authReducer.currnetuser);

  return (
    <div className={classes.Toolbar}>
      <Container className={classes.toolbarContainer}>
        <Row className={classes.toolbarRow}>
          <Col md={6} className={classes.toolbarCol}>
            <div className={classes.toolbarLeft}>
              <div className={classes.welcomeMessage}>
                <FontAwesomeIcon icon={faUniversity} />
                <span>Welcome to CR System</span>
              </div>
            </div>
          </Col>
          <Col md={6} className={classes.toolbarCol}>
            <div className={classes.toolbarRight}>
              <div className={classes.toolbarShareIcon}>
                <ul>
                  {user ? (
                    <li>
                      <div onClick={() => auth.signOut()} className={classes.applyBtn}>
                        Logout
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link to="/register" className={classes.applyBtn}>
                        Register
                      </Link>
                      <Link to="/login" className={classes.applyBtn}>
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Toolbar;
