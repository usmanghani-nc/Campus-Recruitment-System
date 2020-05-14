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
        .then((doc) => {
          const data = {
            id: doc.id,
            vacancy: {
              vacancy,
            },
          };
          dispatch({
            type: actionType.VACANCY_POST,
            data,
          });
        });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionType.ERROR,
        err,
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
  await firestore
    .collection('notifications')
    .add({
      ...notification,
    })
    .then((doc) =>
      dispatch({
        type: actionType.NOTIFICATION,
      })
    );
};

// export const getNotifacations = (companyId) => async dispatch => {
//   await firestore.collection("notifications").where("notification.userId", "==", companyId)
//     .get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         dispatch({
//           type: actionType.GET_NOTIFICATION,
//           notification: {
//             notId: doc.id,
//             data: doc.data().notification
//           }
//         })
//       });
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
// }

export const getNotifacations = (companyId) => async (dispatch) => {
  await firestore
    .collection('notifications')
    .where('userId', '==', companyId)
    .onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          dispatch({
            type: actionType.GET_NOTIFICATION,
            notification: {
              notId: change.doc.id,
              data: change.doc.data(),
            },
          });
        }
      });
    });
};

export const updateVisited = (visitedId) => async (dispatch) => {
  await firestore
    .collection('notifications')
    .doc(visitedId)
    .update({ visited: true })
    .then(() => {
      dispatch({ type: actionType.UPDATE_VISITED, visitedId });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};
