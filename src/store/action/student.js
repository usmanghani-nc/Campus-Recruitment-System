import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const student_data = (student) => {
  return async (dispatch) => {
    await firestore
      .collection('students_users')
      .get()
      .then((com) => {
        com.forEach((doc) => {
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
