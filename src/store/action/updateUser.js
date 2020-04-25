import * as actionType from './actionType';
import { auth, firestore } from '../../firebase/config';

export const company_updated = (data, id) => {
  return async (dispatch) => {
    try {
      const ref = await firestore.collection('comapny_users');

      ref
        .doc(id)
        .update({ data })
        .then(() => {
          let updatedData = {
            id,
            company: { data },
          };

          // console.log(updatedData);
          dispatch({ type: actionType.COMPANY_UPDATED, updatedData });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
};

export const student_updated = (data, id) => {
  return async (dispatch) => {
    try {
      const ref = await firestore.collection('students_users');

      ref
        .doc(id)
        .update({ data })
        .then(() => {
          let updatedData = {
            id,
            student: { data },
          };
          dispatch({ type: actionType.STUDENT_UPDATED, updatedData });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
};

export const update_user = (user, collec) => {
  return async (dispatch) => {
    try {
      if (collec === 'company') {
        await firestore
          .collection('comapny_users')
          .doc(user)
          .get()
          .then((doc) => {
            if (doc.exists) {
              let updatedData = {
                id: user,
                company: doc.data(),
              };
              dispatch({ type: actionType.COMPANY_UPDATE, updatedData });
            }
          })
          .catch((error) => console.error('Error updateing company: ', error));
      }

      if (collec === 'student') {
        await firestore
          .collection('students_users')
          .doc(user)
          .get()
          .then((doc) => {
            if (doc.exists) {
              let updatedData = {
                id: user,
                student: doc.data(),
              };
              dispatch({ type: actionType.UPDATE_USER, updatedData });
            }
          })
          .catch((error) => console.error('Error updateing student: ', error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
