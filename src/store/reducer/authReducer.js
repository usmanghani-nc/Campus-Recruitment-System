import * as actionType from '../action/actionType';

const initialState = {
  currnetuser: false,
  admin: false,
  student: false,
  company: false,
  error: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CURRENT_USER:
      return {
        ...state,
        currnetuser: action.user,
        admin: action.admin,
        student: action.student,
        company: action.comapny,
      };
    case actionType.ADMIN_LOGIN:
      console.log('ADMIN_LOGIN SUCCESS');
      return {
        ...state,
        admin: action.admin,
      };
    case actionType.LOGIN_STUDENT:
      console.log('LOGIN_STUDENT SUCCESS');
      return {
        ...state,
        student: action.student,
      };
    case actionType.LOGIN_COMPANY:
      console.log('LOGIN_COMPANY SUCCESS');
      return {
        ...state,
        company: action.company,
      };
    case actionType.REGISTER_COMPANY:
      console.log('REGISTER_COMPANY SUCCESS');
      return {
        ...state,
      };
    case actionType.REGISTER_STUDENT:
      console.log('REGISTER_STUDENT SUCCESS');
      return {
        ...state,
      };
    case actionType.SIGN_OUT:
      console.log('SIGN_OUT SUCCESS');
      return {
        ...state,
        currnetuser: false,
        admin: false,
        student: false,
        company: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
