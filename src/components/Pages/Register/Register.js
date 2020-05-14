import React, { useState } from 'react';

// IMPORTS..
import { Form, Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { register_company, register_student } from '../../../store/action/index';

// SCSS..
import classes from './register.module.scss';
import Loader from '../../Layout/Loader/Loader';

const Register = () => {
  const [accounType, setAccountType] = useState('');
  const [isLoading, setIsloading] = useState(false);
  // STUDENT USER >> //
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [education, setEducation] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [passingOutYear, setpassingOutYear] = useState('');
  const [gender, setGender] = useState('');
  const [college, setCollege] = useState('');
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

  const errorMessage = useSelector((state) => state.authReducer.errorMessage);
  const collegeData = useSelector(state => state && state.colleges && state.colleges.colleges)

  const { Option } = Select;

  const handleDropDown = (e) => {
    setAccountType(e);
  };

  const confirmPass = (rule, value, callback) => {
    if (!value) {
      callback('Password field is empty!');
    } else if (value.length < 6) {
      callback('Password lenth must be 6 or above');
    } else {
      callback();
    }
  };

  const onFinish = () => {
    const company = {
      companyName,
      companyType,
      companyLocation,
      companyEmail,
      companyPassword,
    };

    const student = {
      firstName,
      lastName,
      email,
      education,
      totalMarks,
      passingOutYear,
      gender,
      college,
      birthdate,
      password,
    };

    if (accounType === 'student') {
      setIsloading(true);
      dispatch(register_student(email, password, student));
    } else {
      setIsloading(true);
      dispatch(register_company(companyEmail, companyPassword, company));
    }
  };

  return (
    <React.Fragment>
      {isLoading && !errorMessage ? (
        <Loader />
      ) : (
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
              {accounType === 'student' ? (
                <Form className={classes.registerForm} onFinish={onFinish}>
                  <label htmlFor="firstName">First Name</label>
                  <Form.Item
                    className={classes.formItem}
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your First Name!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      onChange={(e) => setfirstName(e.target.value)}
                      value={firstName}
                    />
                  </Form.Item>

                  <label htmlFor="lastName">Last Name</label>
                  <Form.Item
                    className={classes.formItem}
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Last Name!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      onChange={(e) => setlastName(e.target.value)}
                      value={lastName}
                    />
                  </Form.Item>

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
                      className={classes.inputs}
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />
                  </Form.Item>

                  <label htmlFor="education">Education</label>
                  <Form.Item
                    className={classes.formItem}
                    name="Education"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Education!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="Education"
                      placeholder="Education"
                      type="text"
                      onChange={(e) => setEducation(e.target.value)}
                      value={education}
                    />
                  </Form.Item>

                  <label htmlFor="marks">Passing out Total marks</label>
                  <Form.Item
                    className={classes.formItem}
                    name="marks"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Marks!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="marks"
                      placeholder="Total marks"
                      type="text"
                      onChange={(e) => setTotalMarks(e.target.value)}
                      value={totalMarks}
                    />
                  </Form.Item>

                  <label htmlFor="PassingOutYear">Passing Out year</label>
                  <DatePicker
                    name="passingOutYear"
                    className={classes.datePicker}
                    onChange={(e, str) => setpassingOutYear(str)}
                    value={passingOutYear ? moment(passingOutYear, 'YYYY-MM-DD') : ''}
                  />

                  <label htmlFor="SelectGender">Select gender</label>

                  <Form.Item
                    className={classes.formItem}
                    name="Gender"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Gender!',
                      },
                    ]}
                  >
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
                  </Form.Item>

                  <label htmlFor="SelectCollege">Select college</label>

                  <Form.Item
                    className={classes.formItem}
                    name="SelectCollege"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your College!',
                      },
                    ]}
                  >
                    <Select
                      className={classes.dropDown}
                      placeholder="SelectCollege"
                      onChange={(e) => setCollege(e)}
                      value={college}
                      allowClear
                    >
                      {collegeData.map(item => <Option key={item.id} value={item.id}>{item.collegeName}</Option>)}

                    </Select>
                  </Form.Item>

                  <label htmlFor="Birthdate">Birthdate</label>
                  <Form.Item
                    className={classes.formItem}
                    name="birthdate"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your birthdate!',
                      },
                    ]}
                  >
                    <DatePicker
                      name="birthdate"
                      className={classes.datePicker}
                      onChange={(e, str) => setBirthdate(str)}
                      value={birthdate ? moment(birthdate, 'YYYY-MM-DD') : ''}
                    />
                  </Form.Item>

                  <label htmlFor="password">Password</label>
                  <Form.Item
                    className={classes.formItem}
                    name="password"
                    rules={[
                      {
                        required: true,
                        validator: (rule, value, callback) => confirmPass(rule, value, callback),
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

                  <label htmlFor="ConfirmPassword">Confirm password</label>

                  <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className={classes.inputs}
                      name="ConfirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </Form.Item>
                  <Button className={classes.subBtn} htmlType="submit">
                    Submit
                </Button>
                </Form>
              ) : accounType === 'company' ? (
                <Form className={classes.registerForm} onFinish={onFinish}>
                  <label htmlFor="CompanyName">Company Name</label>

                  <Form.Item
                    className={classes.formItem}
                    name="CompanyName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your CompanyName!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="CompanyName"
                      placeholder="Company Name"
                      type="text"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                    />
                  </Form.Item>

                  <label htmlFor="companyType">Company type</label>

                  <Form.Item
                    className={classes.formItem}
                    name="companyType"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Company type!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="companyType"
                      placeholder="Company type"
                      type="text"
                      onChange={(e) => setCompanyType(e.target.value)}
                      value={companyType}
                    />
                  </Form.Item>

                  <label htmlFor="companyType">Company location</label>
                  <Form.Item
                    className={classes.formItem}
                    name="CompanyLocation"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Company location!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="CompanyLocation"
                      placeholder="Company location"
                      type="text"
                      onChange={(e) => setCompanyLocation(e.target.value)}
                      value={companyLocation}
                    />
                  </Form.Item>

                  <label htmlFor="Email">Email</label>
                  <Form.Item
                    className={classes.formItem}
                    name="Email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  Email!',
                      },
                    ]}
                  >
                    <Input
                      className={classes.inputs}
                      name="Email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      value={companyEmail}
                    />
                  </Form.Item>

                  <label htmlFor="CompanyPassword">Password</label>

                  <Form.Item
                    className={classes.formItem}
                    name="CompanyPassword"
                    rules={[
                      {
                        required: true,
                        validator: (rule, value, callback) => confirmPass(rule, value, callback),
                      },
                    ]}
                  >
                    <Input.Password
                      className={classes.inputs}
                      name="CompanyPassword"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setcompanyPassword(e.target.value)}
                      value={companyPassword}
                    />
                  </Form.Item>

                  <label htmlFor="confirmPassword">Confirm password</label>

                  <Form.Item
                    className={classes.formItem}
                    dependencies={['CompanyPassword']}
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your confirm password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('CompanyPassword') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className={classes.inputs}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      type="password"
                      onChange={(e) => setCompanyConfirmPassword(e.target.value)}
                      value={companyConfirmPassword}
                    />
                  </Form.Item>

                  <Button className={classes.subBtn} htmlType="submit">
                    Submit
                </Button>
                </Form>
              ) : null}
              <div className={classes.bottomText}>
                <p>
                  Have a account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        )}
    </React.Fragment>
  );
};

export default Register;
