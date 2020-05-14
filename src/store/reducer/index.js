import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer';
import studentReducer from './studentReducer';
import colleges from './collegesReducer'

export default combineReducers({
  authReducer,
  companyReducer,
  studentReducer,
  colleges
});
