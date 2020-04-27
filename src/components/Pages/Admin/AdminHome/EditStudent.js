import React, { useState, useEffect } from 'react';

// IMPORTS...
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { student_updated, update_user } from '../../../../store/action/index';

// SCSS...
import classes from './adminHome.module.scss';

const EditStudent = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    education: '',
    totalMarks: '',
    birthdate: '',
    passingOutYear: '',
    gender: '',
    password: '',
    isEdit: false,
  };
  const [state, setState] = useState(initialState);
  const [passingOutYear, setpassingOutYear] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const { Option } = Select;
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useSelector((statful) => {
    if (statful && statful.studentReducer && statful.studentReducer.singleData && !state.isEdit) {
      setState({
        ...state,
        isEdit: true,
        firstName: statful.studentReducer.singleData.student.data.firstName,
        lastName: statful.studentReducer.singleData.student.data.lastName,
        email: statful.studentReducer.singleData.student.data.email,
        education: statful.studentReducer.singleData.student.data.education,
        totalMarks: statful.studentReducer.singleData.student.data.totalMarks,
        birthdate: statful.studentReducer.singleData.student.data.birthdate,
        gender: statful.studentReducer.singleData.student.data.gender,
        passingOutYear: statful.studentReducer.singleData.student.data.passingOutYear,
        password: statful.studentReducer.singleData.student.data.password,
      });
    }
  });

  useEffect(() => {
    dispatch(update_user(id, 'student'));
  }, [dispatch, id]);

  const handleSelectChange = (event) => {
    setState({
      ...state,
      gender: event,
    });
  };

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    const student = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      education: state.education,
      totalMarks: state.totalMarks,
      passingOutYear,
      gender: state.gender,
      birthdate,
      password: state.password,
    };
    dispatch(student_updated(student, id));
    history.push('/adminIndex/adminstudent');
  };

  return (
    <React.Fragment>
      <Form className={classes.registerForm} onFinish={onFinish} initialValues={{ ...state }}>
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            value={state.lastName}
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
            onChange={handleInputChange}
            value={state.email}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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

        <label htmlFor="SelectGender">Select gender</label>
        <Form.Item
          className={classes.formItem}
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please input your Gender!',
            },
          ]}
        >
          <Select
            className={classes.dropDown}
            name="gender"
            placeholder="gender"
            onChange={handleSelectChange}
            value={state.gender}
            allowClear
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <label htmlFor="Birthdate">Birthdate</label>
        <DatePicker
          name="birthdate"
          className={classes.datePicker}
          onChange={(e, str) => setBirthdate(str)}
          value={birthdate ? moment(birthdate, 'YYYY-MM-DD') : ''}
        />

        <Button className={classes.subBtn} htmlType="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default EditStudent;
