import * as actionType from './actionType';
import { auth, firestore } from '../../firebase/config';

export const current_user = (user) => {
  return {
    type: actionType.CURRENT_USER,
    user,
  };
};

export const singout = () => {
  return {
    type: actionType.SIGN_OUT,
  };
};

export const login = () => {
  return {
    type: actionType.LOGIN,
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
