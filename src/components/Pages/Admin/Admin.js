import React, { useState } from 'react';

// IMPORTS
import {} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import { admin_login } from '../../../store/action/index';

// SCSS...
import classes from './admin.module.scss';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.authReducer.admin);

  const onFinish = () => {
    dispatch(admin_login(email, password));

    admin ? setIsloading(false) : setIsloading(true);
  };

  return (
    <React.Fragment>
      {!isLoading ? (
        <div className={classes.Login}>
          <div className={classes.loginBox}>
            <div className={classes.welcomText}>
              <h3>
                Admin <span>Welcome back to CR system</span>
              </h3>
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
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default Admin;
