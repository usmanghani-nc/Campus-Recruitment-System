import React, { useState, useEffect } from 'react';

// IMPORT..
import { Form, Input, Button } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { vacancy_post } from '../../../store/action/index';

// SCSS..
import classes from './ComapnyVacancy.module.scss';

const ComapnyVacancy = () => {
  const initailState = {
    title: '',
    CompanyName: '',
    Description: '',
    Phone: '',
    City: '',
    CompanyEmail: '',
    PostedTime: '',
    userId: '',
    errMsg: false,
  };

  const [state, setState] = useState(initailState);

  const dispatch = useDispatch();

  const history = useHistory();

  const userId = useSelector(
    (state) => state && state.authReducer && state.authReducer.currnetuser
  );

  const posteDate = () => {
    const date = new Date();
    const dateFormat = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return dateFormat;
  };

  const phonenumber = (rule, value, callback) => {
    let phoneno = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    if (!value) {
      callback('Phone field is empty!');
    } else if (!phoneno.test(value)) {
      callback('put number Eg: +92-333-1234567');
    } else {
      callback();
    }
  };

  const hnadleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    const vacancy = {
      title: state.title,
      CompanyName: state.CompanyName,
      Description: state.Description,
      Phone: state.Phone,
      City: state.City,
      CompanyEmail: state.CompanyEmail,
      userId: userId.uid,
      PostedDate: posteDate(),
    };

    dispatch(vacancy_post(vacancy));
    history.push('/');
  };

  return (
    <div className={classes.ComapnyVacancy}>
      <Container>
        <Row>
          <Col md={8} className={classes.ComapnyVacancyBox}>
            <div className={classes.welcomText}>
              <h3>
                Post <span>Vacancy</span>
              </h3>
            </div>
            <Form onFinish={onFinish} className={classes.VacancyForm}>
              <label htmlFor="title">Title</label>
              <Form.Item
                className={classes.formItem}
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="title"
                  placeholder="title"
                  type="text"
                  onChange={hnadleInput}
                  value={state.title}
                />
              </Form.Item>

              <label htmlFor="companyname">Company name</label>
              <Form.Item
                className={classes.formItem}
                name="CompanyName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your company name!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="CompanyName"
                  placeholder="companyname"
                  type="text"
                  onChange={hnadleInput}
                  value={state.CompanyName}
                />
              </Form.Item>

              <label htmlFor="CompanyEmail">Company email</label>
              <Form.Item
                className={classes.formItem}
                name="CompanyEmail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your title!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="CompanyEmail"
                  placeholder="Company email"
                  type="email"
                  onChange={hnadleInput}
                  value={state.CompanyEmail}
                />
              </Form.Item>

              <label htmlFor="companyname">City</label>
              <Form.Item
                className={classes.formItem}
                name="City"
                rules={[
                  {
                    required: true,
                    message: 'Please input your City!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="City"
                  placeholder="company "
                  type="text"
                  onChange={hnadleInput}
                  value={state.CompanyName}
                />
              </Form.Item>

              <label htmlFor="phone">Company Phone</label>
              <Form.Item
                className={classes.formItem}
                name="Phone"
                rules={[
                  {
                    required: true,
                    validator: (rule, value, callback) => phonenumber(rule, value, callback),
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="Phone"
                  placeholder="Company Phone"
                  type="text"
                  onChange={hnadleInput}
                  value={state.Phone}
                />
              </Form.Item>

              <label htmlFor="Description">Description</label>
              <Form.Item
                className={classes.formItem}
                name="Description"
                rules={[
                  {
                    required: true,
                    message: 'Please input your title!',
                  },
                ]}
              >
                <Input.TextArea
                  className={classes.inputs}
                  name="Description"
                  placeholder="Description"
                  rows={4}
                  onChange={hnadleInput}
                  value={state.Description}
                />
              </Form.Item>
              <Button className={classes.subBtn} htmlType="submit">
                Post Vacancy
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComapnyVacancy;
