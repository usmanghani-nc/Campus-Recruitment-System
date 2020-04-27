import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

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
        .then((doc) => dispatch({ type: actionType.VACANCY_POST }));
    } catch {
      dispatch({ type: actionType.ERROR });
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
