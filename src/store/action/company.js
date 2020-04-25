import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const company_data = (company) => {
  return async (dispatch) => {
    await firestore
      .collection('comapny_users')
      .get()
      .then((com) => {
        com.forEach((doc) => {
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
