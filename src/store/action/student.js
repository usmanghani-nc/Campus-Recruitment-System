import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const student_data = (collegeId) => {
  return async (dispatch) => {
    await firestore
      .collection('students_users')
      .where('data.college', '==', collegeId)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
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

export const single_Data = (studentId) => {
  return async (dispatch) => {
    await firestore
      .collection('students_users')
      .doc(studentId)
      .get()
      .then((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };

        dispatch({ type: actionType.SINGLE_DATA, data });
      })
      .catch((err) => console.log(err));
  };
};

export const college_data = (collegeId) => {
  return async (dispatch) => {
    await firestore
      .collection('colleges')
      .doc(collegeId)
      .get()
      .then((doc) => {
        dispatch({ type: actionType.COLLEGE_NAME, collegeName: doc.data().collegeName });
      })
      .catch((err) => console.log(err));
  };
};

export const data_reset = (payload) => {
  return {
    type: actionType.DATA_RESET,
  };
};
