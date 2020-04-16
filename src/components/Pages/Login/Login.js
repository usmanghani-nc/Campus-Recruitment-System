import React, { useState, useEffect } from 'react';

// IMPORTS..
import { Select, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login_company, login_student, current_user } from '../../../store/action/index';
import { auth } from '../../../firebase/config';

// SCSS..
import classes from './login.module.scss';

const Login = () => {
  const [accounType, setAccountType] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [companyEmail, setcCmpanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((curUser) => {
      if (curUser) {
        dispatch(current_user(curUser));
        history.push('/');
      } else {
        console.log('no user');
      }
    });
  }, [dispatch, history]);

  const { Option } = Select;
  const handleDropDown = (e) => {
    setAccountType(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      studentEmail,
      studentPassword,
    };
    const company = {
      companyEmail,
      companyPassword,
    };

    if (accounType === 'student') {
      if (student.password !== student.confirmPassword) alert('Password not match');

      dispatch(login_student(studentEmail, studentPassword));

      console.log('Student From Submitted', student);
    } else {
      if (company.password !== company.companyConfirmPassword) alert('Password not match');

      dispatch(login_company(companyEmail, companyPassword));

      console.log('Company Form Submitted', company);
    }
  };

  return (
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
          <form onSubmit={handleSubmit} className={classes.LoginForm}>
            <label htmlFor="email">Email</label>
            <Input
              className={classes.inputs}
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setStudentEmail(e.target.value)}
              value={studentEmail}
              required
            />

            <label htmlFor="password">Password</label>
            <Input.Password
              className={classes.inputs}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setStudentPassword(e.target.value)}
              value={studentPassword}
              required
            />
            <Button className={classes.subBtn} htmlType="submit">
              Login with student
            </Button>
          </form>
        ) : accounType === 'company' ? (
          <form onSubmit={handleSubmit} className={classes.LoginForm}>
            <label htmlFor="email">Email</label>
            <Input
              className={classes.inputs}
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setcCmpanyEmail(e.target.value)}
              value={companyEmail}
              required
            />

            <label htmlFor="password">Password</label>
            <Input.Password
              className={classes.inputs}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setCompanyPassword(e.target.value)}
              value={companyPassword}
              required
            />
            <Button className={classes.subBtn} htmlType="submit">
              Login with company
            </Button>
          </form>
        ) : null}

        <div className={classes.bottomText}>
          <p>
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
