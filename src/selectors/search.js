import { createSelector } from 'reselect';
import { pipe } from 'ramda';

export const getSearch = (state) => state.search;  