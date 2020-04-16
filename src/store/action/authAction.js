import * as actionType from './actionType';
import { auth, firestore } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

export const current_user = (user) => {
  return {
    type: actionType.CURRENT_USER,
    user,
  };
};

export const login_student = (email, password) => {
  return async (dispatch) => {
    try {
      const currUser = await auth.signInWithEmailAndPassword(email, password);

      if (currUser && currUser.user && currUser.user.uid) {
        const user = await firestore
          .collection('students_users')
          .doc(currUser.user.uid)
          .get()
          .then((doc) => doc.data());

        dispatch({ type: actionType.LOGIN_STUDENT });
      } else {
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
};

export const login_company = (email, password, data) => {
  return {
    type: actionType.LOGIN_COMPANY,
  };
};

export const register_company = (email, password, data) => {
  return {
    type: actionType.REGISTER_COMPANY,
  };
};

export const register_student = (email, password, data) => {
  return async (dispatch) => {
    try {
      const newStudent = await auth.createUserWithEmailAndPassword(email, password);
      if (newStudent.user.uid) {
        await firestore
          .collection('students_users')
          .doc(newStudent.user.uid)
          .set({
            data,
          })
          .then(() => {
            dispatch({ type: actionType.REGISTER_STUDENT });
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
};

export const singout = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch({ type: actionType.SIGN_OUT });
    });
  };
};
