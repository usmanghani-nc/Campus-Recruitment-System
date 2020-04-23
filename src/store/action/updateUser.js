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
          dispatch({ type: actionType.COMPANY_UPDATED, data });
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
              let data = doc.data().data;
              dispatch({ type: actionType.COMPANY_UPDATE, data });
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
              console.log(doc.data().data, user, collec);
              let data = doc.data().data;
              dispatch({ type: actionType.UPDATE_USER, data });
            }
          })
          .catch((error) => console.error('Error updateing student: ', error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
