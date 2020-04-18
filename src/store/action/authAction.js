import * as actionType from './actionType';
import { auth, firestore } from '../../firebase/config';

export const current_user = (user) => {
  return {
    type: actionType.CURRENT_USER,
    user,
  };
};

export const login_company = (email, password, data) => {
  return async (dispatch) => {
    try {
      const companyUser = await auth.signInWithEmailAndPassword(email, password);

      if (companyUser && companyUser.user && companyUser.user.uid) {
        await firestore
          .collection('comapny_users')
          .doc(companyUser.user.uid)
          .get()
          .then((doc) => doc.data());
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
};

export const register_company = (email, password, data) => {
  return async (dispatch) => {
    try {
      const newComapny = await auth.createUserWithEmailAndPassword(email, password);
      if (newComapny && newComapny.user && newComapny.user.uid) {
        await firestore
          .collection('comapny_users')
          .doc(newComapny.user.uid)
          .set({
            data,
          })
          .then((doc) => dispatch({ type: actionType.REGISTER_COMPANY }))
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
};

export const login_student = (email, password) => {
  return async (dispatch) => {
    try {
      const currUser = await auth.signInWithEmailAndPassword(email, password);

      if (currUser && currUser.user && currUser.user.uid) {
        await firestore
          .collection('students_users')
          .doc(currUser.user.uid)
          .get()
          .then((doc) => doc.data());

        dispatch({
          type: actionType.LOGIN_STUDENT,
        });
      } else {
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
};

export const register_student = (email, password, data) => {
  return async (dispatch) => {
    try {
      const newStudent = await auth.createUserWithEmailAndPassword(email, password);
      if (newStudent && newStudent.user && newStudent.user.uid) {
        await firestore
          .collection('students_users')
          .doc(newStudent.user.uid)
          .set({
            data,
          })
          .then(() => {
            dispatch({
              type: actionType.REGISTER_STUDENT,
            });
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
      dispatch({
        type: actionType.SIGN_OUT,
      });
    });
  };
};
