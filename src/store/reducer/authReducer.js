import * as actionType from '../action/actionType';

const initialState = {
  currnetuser: false,
  error: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CURRENT_USER:
      return {
        ...state,
        currnetuser: action.user,
      };
    case actionType.LOGIN_STUDENT:
      console.log('LOGIN_STUDENT SUCCESS');
      return {
        ...state,
      };
    case actionType.LOGIN_COMPANY:
      console.log('LOGIN_COMPANY SUCCESS');
      return {
        ...state,
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
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
