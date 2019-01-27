import { SearchActionTypes } from 'actions/types';

export const search = (payload) => (
  {
    type: SearchActionTypes.SEARCH,
    payload
  });

export const searchFulfilled = (payload) => (
  {
    type: SearchActionTypes.SEARCH_FULFILLED,
    payload
  });

export const searchFailed = (error) => (
  {
    type: SearchActionTypes.SEARCH_FAILED,
    error
  });

export const searchLoading = () => (
  {
    type: SearchActionTypes.SEARCH_LOADING
  });
