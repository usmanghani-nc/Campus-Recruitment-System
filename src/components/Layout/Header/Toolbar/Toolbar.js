import React from 'react';

// IMPORTS...
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { singout } from '../../../../store/action/index';

// SCSS...
import classes from '../header.module.scss';

const Toolbar = () => {
  let displayName;
  const user = useSelector((state) => state.authReducer.currnetuser);
  const company = useSelector((state) => state.authReducer.company);
  const student = useSelector((state) => state.authReducer.student);
  const admin = useSelector((state) => state.authReducer.admin);

  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    history.push('/login');
    return dispatch(singout());
  };

  if (company && company.data) displayName = company.data.companyName;

  if (student && student.data) displayName = `${student.data.firstName}  ${student.data.lastName}`;

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
                  <li>
                    <Link to="/">{displayName}</Link>
                  </li>
                  {admin ? (
                    <li>
                      <Link to="/adminindex" className={classes.applyBtn}>
                        Admin
                      </Link>
                    </li>
                  ) : null}

                  {user ? (
                    <li>
                      <div onClick={signOut} className={classes.applyBtn}>
                        Logout
                      </div>
                    </li>
                  ) : (
                    <React.Fragment>
                      <li>
                        <Link to="/register" className={classes.applyBtn}>
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className={classes.applyBtn}>
                          Login
                        </Link>
                      </li>
                    </React.Fragment>
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
