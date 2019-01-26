import { combineReducers } from 'redux';

// -- reducers
import config from './config';
import search from './search';

export const rootReducer = combineReducers({
  config,
  search
});