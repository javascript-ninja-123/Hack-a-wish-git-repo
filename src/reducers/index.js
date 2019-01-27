import { combineReducers } from 'redux';

// -- reducers
import config from './config';
import search from './search';
import ui from './ui';
import profile from './profile';

export const rootReducer = combineReducers({
  config,
  search,
  ui,
  profile
});