import * as actionType from './actionType';
import { firestore } from '../../firebase/config';

export const delet_user = (user, collec) => {
  return async (dispatch) => {
    try {
      if (collec === 'company') {
        const ref = await firestore.collection('comapny_users');
        const viRef = await firestore.collection('company_vacancy');

        ref
          .doc(user)
          .delete()
          .then((doc) => {
            dispatch({ type: actionType.DELET_COMAPNY, id: user });
          });

        viRef
          .where('vacancy.userId', '==', user)
          .delete()
          .then((doc) => {
            dispatch({ type: actionType.DELET_VACANCY, id: user });
          });
      }

      if (collec === 'student') {
        const ref = await firestore.collection('students_users');

        ref
          .doc(user)
          .delete()
          .then((doc) => {
            dispatch({ type: actionType.DELET_USER, id: user });
          })
          .catch((error) => console.error('Error removing document: ', error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
