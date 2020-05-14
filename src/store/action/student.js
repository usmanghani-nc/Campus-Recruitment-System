import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const student_data = (collegeId) => {
  return async (dispatch) => {
    await firestore
      .collection('students_users')
      .where('data.college', '==', collegeId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            student: doc.data(),
          };

          dispatch({
            type: actionType.STUDENT_DATA,
            data,
          });
        });
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };
};

export const data_reset = (payload) => {
  return {
    type: actionType.DATA_RESET,
  };
};
