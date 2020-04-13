import React from 'react';

// IMPORTS..
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

// SCSS..
import classes from './register.module.scss';

const Register = () => {
  const { Option } = Select;

  const handleDropDown = (e) => {
    console.log(e);
  };

  return (
    <div className={classes.Register}>
      <div className={classes.registeBox}>
        <div className={classes.welcomText}>
          <h3>
            Welcome <span>To the best CR system</span>
          </h3>
        </div>
        <Select
          placeholder="Select a option and change input text above"
          onChange={handleDropDown}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>

        <Form className={classes.registerForm}>
          <label htmlFor="firstName">First Name</label>
          <Input
            className={classes.inputs}
            name="firstName"
            placeholder="First Name"
            type="text"
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <Input
            className={classes.inputs}
            name="lastName"
            placeholder="Last Name"
            type="text"
            required
          />

          <label htmlFor="email">Email</label>
          <Input
            className={classes.inputs}
            name="email"
            placeholder="Email"
            type="email"
            required
          />

          <label htmlFor="password">Password</label>
          <Input.Password
            className={classes.inputs}
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <label htmlFor="ConfirmPassword">Confirm password</label>
          <Input.Password
            className={classes.inputs}
            name="ConfirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />

          <Button className={classes.subBtn} type="submit">
            Submit
          </Button>
        </Form>
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
