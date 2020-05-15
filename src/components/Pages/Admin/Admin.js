import React, { useState } from 'react';

// IMPORTS
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import { admin_login } from '../../../store/action/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// SCSS...
import classes from './admin.module.scss';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);

  useSelector((state) => {
    if (state && state.authReducer && state.authReducer.admin && isLoading) {
      history.push('/adminindex');
      setIsloading(false);
    }
  });

  const onFinish = () => {
    setIsloading(true);
    dispatch(admin_login(email, password));
  };

  return (
    <React.Fragment>
      {isLoading && !errorMessage ? (
        <Loader />
      ) : (
        <div className={classes.Login}>
          <div className={classes.loginBox}>
            <div className={classes.welcomText}>
              <h3>
                Admin <span>Welcome back to CR system</span>
              </h3>
              {errorMessage ? (
                <div className="alert alert-warning input100 alert-dismissible show">
                  <h4 className="alert-heading">
                    <FontAwesomeIcon icon={faExclamationTriangle} /> Warning!
                  </h4>
                  <p>{errorMessage ? errorMessage : 'Login Failed'}</p>
                </div>
              ) : (
                <div></div>
              )}
              <Form className={classes.LoginForm} onFinish={onFinish}>
                <label htmlFor="email">Email</label>
                <Form.Item
                  className={classes.formItem}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input
                    className={classes.formItem}
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Item>

                <label htmlFor="password">Password</label>
                <Form.Item
                  className="form-item-antd"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    className={classes.inputs}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Item>

                <Button className={classes.subBtn} htmlType="submit">
                  LOGIN ADMIN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Admin;
