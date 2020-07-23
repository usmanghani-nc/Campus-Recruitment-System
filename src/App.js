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
    dispatch(colleges_data());
    dispatch(studenst_data());
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
        setState({
          ...state,
          isLoading: false,
        });
      } else {
        setState({
          ...state,
          isLoading: false,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, currentType, history]);

  return <div className="App">{state.isLoading ? <Loader /> : <Routes />}</div>;
};

export default App;
