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
        currnetuser: action.user
      }
      case actionType.LOGIN:
        return {
          ...state,
        };
      case actionType.REGISTER_COMPANY:
        return {
          ...state,
        };
      case actionType.REGISTER_STUDENT:
        return {
          ...state,
        };
      case actionType.SIGN_OUT:
        return {
          ...state,
        };
      default:
        return {
          ...state,
        };
  }
};

export default auth;