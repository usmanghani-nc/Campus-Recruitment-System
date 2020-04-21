import React, { useState, useEffect } from 'react';

// IMPORTS...
import Routes from './components/Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { current_user, company_data, student_data } from './store/action/index';
import { auth } from './firebase/config';
import Loader from './components/Layout/Loader/Loader';

// SCSS...
import './App.scss';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState(false);

  const currentType = useSelector((state) => state.authReducer.userData);

  useEffect(() => {
    dispatch(company_data());
    dispatch(student_data());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curUser) => {
      if (curUser) {
        dispatch(current_user(curUser));
        setData(curUser);

        if (currentType && currentType.data && currentType.data.type) {
          history.push('/adminhome');
        } else {
          history.push('/');
        }
      } else {
        setData(!curUser);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, currentType, history]);

  return <div className="App">{data ? <Routes /> : <Loader />}</div>;
};

export default App;
