import React, { useEffect, useState } from 'react';

// IMPORTS...
import Routes from './components/Routes/Routes';
import { useHistory } from 'react-router-dom';
import {
  current_user,
  company_data,
  // student_data,
  vacancys,
  getNotifacations,
  colleges_data,
} from './store/action/index';
import { auth } from './firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Layout/Loader/Loader';

// SCSS...
import './App.scss';

const App = () => {
  const initialState = {
    isLoading: false,
  };
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentType = useSelector((state) => state.authReducer.userData);

  useEffect(() => {
    dispatch(vacancys());
    dispatch(company_data());
    // dispatch(student_data());
    dispatch(colleges_data());
  }, [dispatch]);

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    const unsubscribe = auth.onAuthStateChanged((curUser) => {
      if (curUser && curUser.uid) {
        dispatch(current_user(curUser));
        dispatch(getNotifacations(curUser.uid));
      }

      if (currentType && currentType.data && currentType.data.type) {
        history.push('/AdminIndex');
      }
    });
    setState({
      ...state,
      isLoading: false,
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, currentType, history]);

  return <div className="App">{state.isLoading ? <Loader /> : <Routes />}</div>;
};

export default App;
