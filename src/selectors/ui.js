import { createSelector } from 'reselect';
import { pipe } from 'ramda';

export const getUI = (state) => state.ui;  