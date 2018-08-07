
import { combineReducers } from 'redux';
import userReducer from './user';
import worklogReducer from './worklog';

export default combineReducers({
  userReducer,
  worklogReducer
});