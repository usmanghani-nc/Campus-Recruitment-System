import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  authReducer,
  companyReducer,
  studentReducer,
});
