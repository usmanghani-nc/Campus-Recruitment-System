import React, { useState, useEffect } from 'react';

// IMPORTS..
import { Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register_company, register_student, current_user } from '../../../store/action/index';
import { auth } from '../../../firebase/config';

// SCSS..
import classes from './register.module.scss';

const Register = () => {
  const [accounType, setAccountType] = useState('');
  // STUDENT USER >> //
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [education, setEducation] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [passingOutYear, setpassingOutYear] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // COMPANY >> //
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setcompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useSelector((state) => {
    if (state && state.authReducer.currnetuser) {
      console.log('user found');
    } else {
      console.log('not found');
    }
  });

  useEffect(() => {
    auth.onAuthStateChanged((curUser) => {
      if (curUser) {
        dispatch(current_user(curUser));
      } else {
        console.log('no user');
      }
    });
  }, [dispatch]);

  const { Option } = Select;

  const handleDropDown = (e) => {
    setAccountType(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const company = {
      companyName,
      companyType,
      companyLocation,
      companyEmail,
      companyPassword,
      companyConfirmPassword,
    };

    const student = {
      firstName,
      lastName,
      email,
      education,
      totalMarks,
      passingOutYear,
      gender,
      birthdate,
      password,
      confirmPassword,
    };

    if (accounType === 'student') {
      if (student.password !== student.confirmPassword) alert('Password not match');

      dispatch(register_student(email, password, student));

      console.log('Student From Submitted', student);
    } else {
      if (company.password !== company.companyConfirmPassword) alert('Password not match');

      dispatch(register_company(email, password, company));

      console.log('Company Form Submitted', company);
    }
  };

  // useSelector((state) => {});

  return (
    <div className={classes.Register}>
      <div className={classes.registeBox}>
        <div className={classes.welcomText}>
          <h3>
            Welcome <span>To the best CR system</span>
          </h3>
        </div>
        <Select
          className={classes.dropDown}
          placeholder="Account for ?"
          onChange={handleDropDown}
          allowClear
        >
          <Option value="student">Register as student</Option>
          <Option value="company">Register as company</Option>
        </Select>

        {accounType === 'student' ? (
          <form className={classes.registerForm} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <Input
              className={classes.inputs}
              name="firstName"
              placeholder="First Name"
              type="text"
              onChange={(e) => setfirstName(e.target.value)}
              value={firstName}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <Input
              className={classes.inputs}
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={(e) => setlastName(e.target.value)}
              value={lastName}
              required
            />

            <label htmlFor="email">Email</label>
            <Input
              className={classes.inputs}
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="education">Education</label>
            <Input
              className={classes.inputs}
              name="Education"
              placeholder="Education"
              type="text"
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              required
            />

            <label htmlFor="education">Passing out Total marks</label>
            <Input
              className={classes.inputs}
              name="marks"
              placeholder="Total marks"
              type="text"
              onChange={(e) => setTotalMarks(e.target.value)}
              value={totalMarks}
              required
            />

            <label htmlFor="PassingOutYear">Passing Out year</label>
            <DatePicker
              name="passingOutYear"
              className={classes.datePicker}
              onChange={(e, str) => setpassingOutYear(str)}
              value={passingOutYear ? moment(passingOutYear, 'YYYY-MM-DD') : ''}
            />

            <label htmlFor="SelectGender">Select gender</label>
            <Select
              className={classes.dropDown}
              placeholder="Gender"
              onChange={(e) => setGender(e)}
              value={gender}
              allowClear
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>

            <label htmlFor="Birthdate">Birthdate</label>
            <DatePicker
              name="birthdate"
              className={classes.datePicker}
              onChange={(e, str) => setBirthdate(str)}
              value={birthdate ? moment(birthdate, 'YYYY-MM-DD') : ''}
            />

            <label htmlFor="password">Password</label>
            <Input.Password
              className={classes.inputs}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <label htmlFor="ConfirmPassword">Confirm password</label>
            <Input.Password
              className={classes.inputs}
              name="ConfirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />

            <Button className={classes.subBtn} htmlType="submit">
              Submit
            </Button>
          </form>
        ) : accounType === 'company' ? (
          <form className={classes.registerForm} onSubmit={handleSubmit}>
            <label htmlFor="firstName">Company Name</label>
            <Input
              className={classes.inputs}
              name="CompanyName"
              placeholder="Company Name"
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              required
            />
            <label htmlFor="companyType">Company type</label>
            <Input
              className={classes.inputs}
              name="companyType"
              placeholder="Company type"
              type="text"
              onChange={(e) => setCompanyType(e.target.value)}
              value={companyType}
              required
            />
            <label htmlFor="companyType">Company location</label>
            <Input
              className={classes.inputs}
              name="CompanyLocation"
              placeholder="Company location"
              type="text"
              onChange={(e) => setCompanyLocation(e.target.value)}
              value={companyLocation}
              required
            />
            <label htmlFor="Email">Email</label>
            <Input
              className={classes.inputs}
              name="Email"
              placeholder="Email"
              type="email"
              onChange={(e) => setCompanyEmail(e.target.value)}
              value={companyEmail}
              required
            />

            <label htmlFor="CompanyPassword">Password</label>
            <Input
              className={classes.inputs}
              name="CompanyPassword"
              placeholder="Password"
              type="password"
              onChange={(e) => setcompanyPassword(e.target.value)}
              value={companyPassword}
              required
            />
            <label htmlFor="setCompanyConfirmPassword">Confirm password</label>
            <Input
              className={classes.inputs}
              name="setCompanyConfirmPassword"
              placeholder="Confirm password"
              type="password"
              onChange={(e) => setCompanyConfirmPassword(e.target.value)}
              value={companyConfirmPassword}
              required
            />
            <Button className={classes.subBtn} htmlType="submit">
              Submit
            </Button>
          </form>
        ) : null}
        <div className={classes.bottomText}>
          <p>
            Have a account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
