import { combineReducers } from 'redux';
import { SearchActionTypes } from 'actions/types';


const initialState = {
  results: [],
  isLoading: false,
  error: null
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {

    case SearchActionTypes.SEARCH_LOADING:
      return true;

    case SearchActionTypes.SEARCH_FULFILLED:
    case SearchActionTypes.SEARCH_FAILED:
      return false;

    default:
      return state;
  }
}

const error = (state = initialState.error, action) => {
  switch (action.type) {
    
    case SearchActionTypes.SEARCH_FAILED:
      return action.error;

    default:
      return state;
  }
}

const results = (state = initialState.results, action) => {
  switch (action.type) {

    case SearchActionTypes.SEARCH_LOADING:
    case SearchActionTypes.SEARCH_FAILED:
      return [];

    case SearchActionTypes.SEARCH_FULFILLED:
      return action.payload; //TODO: send response

    default:
      return state;
  }
}

export default combineReducers({ results, isLoading, error });