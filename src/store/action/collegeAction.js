import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const colleges_data = (payload) => {
  return async (dispatch) => {
    await firestore
      .collection('colleges')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            ...doc.data(),
          };
          dispatch({ type: actionType.COLLEGES_DATA, data });
        });
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };
};
