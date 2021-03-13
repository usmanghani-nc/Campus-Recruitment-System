import * as actionType from './actionType';
import { auth, firestore } from '../../firebase/config';

export const current_user = (user) => {
  return async (dispatch) => {
    if (!user) {
      dispatch({
        type: actionType.CURRENT_USER,
        user: false,
        admin: false,
        student: false,
        comapny: false,
      });
      return;
    }

    const admin = await firestore
      .collection('Admin')
      .doc(user.uid)
      .get()
      .then((doc) => doc.data())
      .catch((err) => console.log(err));

    const student = await firestore
      .collection('students_users')
      .doc(user.uid)
      .get()
      .then((doc) => doc.data())
      .catch((err) => console.log(err));

    const comapny = await firestore
      .collection('comapny_users')
      .doc(user.uid)
      .get()
      .then((doc) => doc.data())
      .catch((err) => console.log(err));

    try {
      if (admin !== undefined || student !== undefined || comapny !== undefined) {
        dispatch({
          type: actionType.CURRENT_USER,
          user,
          admin,
          student,
          comapny,
        });
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage: 'No user',
      });
    }
  };
};

export const admin_login = (email, password) => {
  return async (dispatch) => {
    try {
      const adminSignIn = await auth.signInWithEmailAndPassword(email, password);
      if (adminSignIn && adminSignIn.user && adminSignIn.user.uid) {
        const admin = await firestore
          .collection('Admin')
          .doc(adminSignIn.user.uid)
          .get()
          .then((doc) => doc.data());

        dispatch({
          type: actionType.ADMIN_LOGIN,
          admin,
          error: false,
        });

        localStorage.setItem('USER_TOKEN', admin);
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage:
          'Really admin ? write down your credential on some paper you are a admin for god sake!!',
      });
    }
  };
};

export const login_company = (email, password, data) => {
  return async (dispatch) => {
    try {
      const currUser = await auth.signInWithEmailAndPassword(email, password);

      if (currUser && currUser.user && currUser.user.uid) {
        const comapny = await firestore
          .collection('comapny_users')
          .doc(currUser.user.uid)
          .get()
          .then((doc) => doc.data());

        dispatch({
          type: actionType.LOGIN_COMPANY,
          comapny,
          error: false,
        });

        localStorage.setItem('USER_TOKEN', comapny);
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage: 'Please fill up the right credentials',
      });
    }
  };
};

export const register_company = (email, password, data) => {
  return async (dispatch) => {
    try {
      const newComapny = await auth.createUserWithEmailAndPassword(email, password);
      if (newComapny && newComapny.user && newComapny.user.uid) {
        await firestore
          .collection('comapny_users')
          .doc(newComapny.user.uid)
          .set({
            data,
          })
          .then((doc) =>
            dispatch({
              type: actionType.REGISTER_COMPANY,
              error: false,
            }),
          )
          .catch((error) => {
            console.error('Error writing document: ', error);
          });

        localStorage.setItem('USER_TOKEN', data);
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage: 'Failed to register',
      });
    }
  };
};

export const login_student = (email, password) => {
  return async (dispatch) => {
    try {
      const currUser = await auth.signInWithEmailAndPassword(email, password);

      if (currUser && currUser.user && currUser.user.uid) {
        const student = await firestore
          .collection('students_users')
          .doc(currUser.user.uid)
          .get()
          .then((doc) => doc.data());
        dispatch({
          type: actionType.LOGIN_STUDENT,
          student,
          error: false,
        });
        localStorage.setItem('USER_TOKEN', student);
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage: 'Please fill up the right credentials',
      });
    }
  };
};

export const register_student = (email, password, data) => {
  return async (dispatch) => {
    try {
      const newStudent = await auth.createUserWithEmailAndPassword(email, password);
      if (newStudent && newStudent.user && newStudent.user.uid) {
        await firestore
          .collection('students_users')
          .doc(newStudent.user.uid)
          .set({
            data,
          })
          .then(() => {
            dispatch({
              type: actionType.REGISTER_STUDENT,
            });
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
        localStorage.setItem('USER_TOKEN', data);
      }
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        error: true,
        errorMessage: 'Failed to register',
      });
    }
  };
};

export const singout = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch({
        type: actionType.SIGN_OUT,
      });
    });
    localStorage.removeItem('USER_TOKEN');
  };
};
