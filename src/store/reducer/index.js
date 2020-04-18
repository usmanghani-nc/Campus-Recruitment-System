import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer';

export default combineReducers({
  authReducer,
  companyReducer,
});
