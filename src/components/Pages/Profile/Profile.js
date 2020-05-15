import React, { useState, useEffect } from 'react';

// IMPORT...
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, DatePicker, Skeleton } from 'antd';
import moment from 'moment';
import { single_Data } from '../../../store/action/index';
import { useParams } from 'react-router-dom'

import classes from './profile.module.scss'

const Profile = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    education: '',
    totalMarks: '',
    gender: '',
    college: '',
    birthdate: '',
    password: '',
    isEdit: false,
  }
  const [state, setState] = useState(initialState);
  const [passingOutYear, setpassingOutYear] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(single_Data(id));
  }, [])

  useSelector(stateful => {
    if (stateful && stateful.studentReducer && stateful.studentReducer.singleData && !state.isEdit) {
      const { firstName, lastName, birthdate, email, password, college, gender, totalMarks, education, passingOutYear } = stateful.studentReducer.singleData.data;
      setState({
        ...state,
        isEdit: true,
        firstName,
        lastName,
        birthdate,
        email,
        password,
        college,
        gender,
        totalMarks,
        education
      })
      setpassingOutYear(passingOutYear)
    }
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onFinish = () => {

    const student = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      education: state.education,
      totalMarks: state.totalMarks,
      passingOutYear: passingOutYear,
      gender: state.gender,
      college: state.college,
      birthdate: state.birthdate,
      password: state.password,
    };

    console.log(student)
    // dispatch(register_company(companyEmail, companyPassword, company));

  };

  return (
    <div className={classes.Profile}>
      <Container>
        <Row>
          <Col md={4}>
            {state.isEdit ? <div>
              <p>Name : <span>{`${state.firstName} ${state.lastName}`}</span></p>
              <p>Birthdate : <span>{state.birthdate}</span></p>
              <p>Email : <span>{state.email}</span></p>
              <p>College : <span>{state.college}</span></p>
              <p>Education : <span>{state.education}</span></p>
              <p>Total marks : <span>{state.totalMarks}</span></p>
              <p>Gender : <span>{state.gender}</span></p>
              <p>Passing out year : <span>{passingOutYear}</span></p>
            </div> : <Skeleton active />}
          </Col>

          <Col md={8}>
            {state.isEdit ? <Form className={classes.registerForm} onFinish={onFinish} initialValues={{ ...state }}>
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
                  onChange={handleChange}
                  value={state.firstName}
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
                  onChange={handleChange}
                  value={state.lastName}
                />
              </Form.Item>

              <label htmlFor="education">Education</label>
              <Form.Item
                className={classes.formItem}
                name="education"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Education!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="education"
                  placeholder="Education"
                  type="text"
                  onChange={handleChange}
                  value={state.education}
                />
              </Form.Item>

              <label htmlFor="marks">Passing out Total marks</label>
              <Form.Item
                className={classes.formItem}
                name="totalMarks"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Marks!',
                  },
                ]}
              >
                <Input
                  className={classes.inputs}
                  name="totalMarks"
                  placeholder="Total marks"
                  type="text"
                  onChange={handleChange}
                  value={state.totalMarks}
                />
              </Form.Item>

              <label htmlFor="PassingOutYear">Passing Out year</label>
              <DatePicker
                name="passingOutYear"
                className={classes.datePicker}
                onChange={(e, str) => setpassingOutYear(str)}
                value={passingOutYear ? moment(passingOutYear, 'YYYY-MM-DD') : ''}
              />


              <Button className={classes.subBtn} htmlType="submit">
                Submit
                </Button>
            </Form> : <Skeleton active />}

          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Profile;
