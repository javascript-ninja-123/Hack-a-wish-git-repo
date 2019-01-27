import { combineReducers } from 'redux';

// -- reducers
import config from './config';
import search from './search';
import profile from './profile';

export const rootReducer = combineReducers({
  config,
  search,
  profile
});