import * as actionType from '../action/actionType';

const initialState = {
  currnetuser: false,
  admin: false,
  student: false,
  company: false,
  error: false,
  errorMessage: '',
  loading: true,
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
        loading: false,
      };
    case actionType.ADMIN_LOGIN:
      return {
        ...state,
        admin: action.admin,
        errorMessage: '',
      };
    case actionType.LOGIN_STUDENT:
      return {
        ...state,
        error: action.error,
        student: action.student,
        errorMessage: '',
      };
    case actionType.LOGIN_COMPANY:
      return {
        ...state,
        error: action.error,
        errorMessage: '',
        company: action.company,
      };
    case actionType.REGISTER_COMPANY:
      return {
        ...state,
      };
    case actionType.REGISTER_STUDENT:
      return {
        ...state,
      };
    case actionType.ERROR:
      return {
        ...state,
        error: action.error,
        errorMessage: action.errorMessage,
      };
    case actionType.SIGN_OUT:
      return {
        ...state,
        currnetuser: false,
        admin: false,
        student: false,
        company: false,
        error: false,
        errorMessage: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
