import React, { useState } from 'react';

// IMPORTS..
import { Form, Select, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { login_company, login_student } from '../../../store/action/index';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';

// SCSS..
import classes from './login.module.scss';

const Login = () => {
  const [accounType, setAccountType] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [companyEmail, setcCmpanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();
  const { Option } = Select;

  const user = useSelector((state) => state.authReducer.currnetuser);

  const handleDropDown = (e) => {
    setAccountType(e);
  };

  const onFinish = () => {
    if (accounType === 'student') {
      dispatch(login_student(studentEmail, studentPassword));

      user.uid ? setIsloading(false) : setIsloading(true);
    } else {
      dispatch(login_company(companyEmail, companyPassword));

      user.uid ? setIsloading(false) : setIsloading(true);
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.Login}>
          <div className={classes.loginBox}>
            <div className={classes.welcomText}>
              <h3>
                Welcome <span>To the best CR system</span>
              </h3>
              <Select
                className={classes.dropDown}
                placeholder="Login with"
                onChange={handleDropDown}
                allowClear
              >
                <Option value="student">Login as student</Option>
                <Option value="company">Login as company</Option>
              </Select>
            </div>
            {accounType === 'student' ? (
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
                    onChange={(e) => setStudentEmail(e.target.value)}
                    value={studentEmail}
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
                    onChange={(e) => setStudentPassword(e.target.value)}
                    value={studentPassword}
                  />
                </Form.Item>

                <Button className={classes.subBtn} htmlType="submit">
                  Login with student
                </Button>
              </Form>
            ) : accounType === 'company' ? (
              <Form className={classes.LoginForm} onFinish={onFinish}>
                <label htmlFor="email">Email</label>
                <Form.Item
                  className={classes.formItem}
                  name="email"
                  rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                  <Input
                    className={classes.inputs}
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setcCmpanyEmail(e.target.value)}
                    value={companyEmail}
                  />
                </Form.Item>

                <label htmlFor="password">Password</label>
                <Form.Item
                  className={classes.formItem}
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input.Password
                    className={classes.inputs}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setCompanyPassword(e.target.value)}
                    value={companyPassword}
                  />
                </Form.Item>
                <Button className={classes.subBtn} htmlType="submit">
                  Login with company
                </Button>
              </Form>
            ) : null}

            <div className={classes.bottomText}>
              <p>
                Not registered? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
