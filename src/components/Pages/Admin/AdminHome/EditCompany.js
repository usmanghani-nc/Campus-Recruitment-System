import React, { useState, useEffect } from 'react';

// IMPORTS...
import { Form, Input, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { update_user, company_updated } from '../../../../store/action/index';

import classes from './adminHome.module.scss';

const EditCompany = (props) => {
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const company = useSelector((state) => state.companyReducer.singleData);

  useEffect(() => {
    dispatch(update_user(id, 'company'));
  }, [id, dispatch]);

  const onFinish = () => {
    const companyData = {
      companyName,
      companyType,
      companyLocation,
      companyEmail,
      companyPassword: company && company.companyPassword,
    };

    dispatch(company_updated(companyData, id));

    history.push('/adminIndex/admincompany');
  };

  return (
    <React.Fragment>
      <Form className={classes.registerForm} onFinish={onFinish}>
        <label htmlFor="CompanyName">Company Name</label>

        <Form.Item
          className={classes.formItem}
          name="CompanyName"
          placeholder={'Company Name'}
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
            placeholder={company && company.companyName ? company.companyName : 'Company Name'}
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
            placeholder={company && company.companyType ? company.companyType : 'Company type'}
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
            placeholder={
              company && company.companyLocation ? company.companyLocation : 'Company location'
            }
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
            placeholder={company && company.companyEmail ? company.companyEmail : 'Email'}
            type="email"
            onChange={(e) => setCompanyEmail(e.target.value)}
            value={companyEmail}
          />
        </Form.Item>

        <Button className={classes.subBtn} htmlType="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default EditCompany;
