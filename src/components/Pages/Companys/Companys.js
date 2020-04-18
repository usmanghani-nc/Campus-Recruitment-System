import React, { useState, useEffect } from 'react';

// IMPORTS..
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { company_data } from '../../../store/action/index';

// SCSS..
import classes from './company.module.scss';

const Companys = () => {
  const company = useSelector((state) => state.companyReducer.companyData);
  const dispatch = useDispatch();

  return <div>Companys</div>;
};

export default Companys;
