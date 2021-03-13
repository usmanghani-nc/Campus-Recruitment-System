import React, { useEffect, useState } from 'react';

// IMPORTS...
import Routes from './components/Routes/Routes';
import { useHistory } from 'react-router-dom';
import {
  current_user,
  company_data,
  vacancys,
  getNotifacations,
  colleges_data,
  studenst_data,
} from './store/action/index';
import { auth } from './firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Layout/Loader/Loader';
import PublicRoutes from './components/Routes/PublicRoutes';

// SCSS...
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentType = useSelector((state) => state.authReducer.currnetuser?.uid);
  const loading = useSelector((state) => state.authReducer.loading);

  useEffect(() => {
    dispatch(vacancys());
    dispatch(company_data());
    dispatch(colleges_data());
    dispatch(studenst_data());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curUser) => {
      dispatch(current_user(curUser));
      dispatch(getNotifacations(curUser ? curUser.uid : curUser));
    });

    return () => unsubscribe();
  }, [currentType]);

  if (loading) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  return <div className="App">{currentType ? <Routes /> : <PublicRoutes />}</div>;
};

export default App;
