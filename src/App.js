import React, { useState, useEffect } from 'react';

// IMPORTS...
import Routes from './components/Routes/Routes';
import { useHistory } from 'react-router-dom';
import { current_user, company_data, student_data, vacancys, getNotifacations } from './store/action/index';
import { auth } from './firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Layout/Loader/Loader'

// SCSS...
import './App.scss';

const App = () => {
  const initilaState = {
    isLoading: false,
  }
  const [state, setState] = useState(initilaState);

  const history = useHistory();
  const dispatch = useDispatch();

  const currentType = useSelector((state) => state.authReducer.userData);

  useEffect(() => {
    dispatch(vacancys());
    dispatch(company_data());
    dispatch(student_data());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curUser) => {
      if (curUser && curUser.uid) {
        dispatch(current_user(curUser));
        dispatch(getNotifacations(curUser.uid))

        if (currentType && currentType.data && currentType.data.type) {
          history.push('/AdminIndex');
        } else {
          history.push('/');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, currentType, history])


  return <div className="App"> <Routes /> </div>;
};

export default App;
