import * as actionType from './actionType';
import {
  firestore
} from '../../firebase/config';

export const company_data = (company) => {
  return async (dispatch) => {
    await firestore
      .collection('comapny_users')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            company: doc.data(),
          };

          dispatch({
            type: actionType.COMPANY_DATA,
            data,
          });
        });
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };
};

export const vacancy_post = (vacancy) => {
  return async (dispatch) => {
    try {
      await firestore
        .collection('company_vacancy')
        .add({
          vacancy,
        })
        .then((doc) => {
          const data = {
            id: doc.id,
            vacancy: {
              vacancy
            },
          };
          dispatch({
            type: actionType.VACANCY_POST,
            data
          });
        });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionType.ERROR,
        err
      });
    }
  };
};

export const vacancys = () => {
  return async (dispatch) => {
    await firestore
      .collection('company_vacancy')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const vacancys = {
            id: doc.id,
            vacancy: doc.data(),
          };
          dispatch({
            type: actionType.VACANCYS,
            vacancys,
          });
        });
      });
  };
};

export const vacancyNotification = (notification) => async (dispatch) => {
  await firestore.collection('notification').add({
    notification
  }).then(doc => dispatch({
    type: actionType.NOTIFICATION
  }))
}