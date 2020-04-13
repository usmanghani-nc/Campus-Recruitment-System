import React, { useState } from 'react';

// IMPORTS..
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

// SCSS..
import classes from './login.module.scss';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submiited');
  };

  return (
    <div className={classes.Login}>
      <div className={classes.loginBox}>
        <div className={classes.welcomText}>
          <h3>
            Welcome <span>To the best CR system</span>
          </h3>
        </div>
        <Form onSubmit={handleSubmit} className={classes.LoginForm}>
          <label htmlFor="email">Email</label>
          <Input
            className={classes.inputs}
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />

          <label htmlFor="password">Password</label>
          <Input.Password
            className={classes.inputs}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={inputs.password}
            required
          />
          <Button className={classes.subBtn} type="submit">
            Submit
          </Button>
        </Form>
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
