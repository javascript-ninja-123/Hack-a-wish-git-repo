import { combineReducers } from 'redux';

// -- reducers
import config from './config';

export const rootReducer = combineReducers({
  config: config
});