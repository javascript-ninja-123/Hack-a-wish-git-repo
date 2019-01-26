import { SearchActionTypes } from 'actions/types';
import { searchFailed, searchFulfilled, searchLoading } from 'actions';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, catchError, startWith } from 'rxjs/operators';
import { defer, Observable } from 'rxjs';

// -- User Imports
import config from 'config';
import { request } from 'utils/request';
import searchData from 'utils/request/mocks/search.json';

const search = (value, payload) =>
  Observable.create(async observer => {
    try {

      let data;

      if (config.enableMock) {
        data = searchData;
      } else {
        //TODO: Put real request when API is ready
        data = await request.post(`${config.baseUrl}/search/`, {
          body: JSON.stringify(payload),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //TODO: Auth Here
          },
          //params: params,
        });
      }

      observer.next(searchFulfilled(data));
    } catch (err) {
      observer.next(searchFailed(err));
    } finally {
      observer.complete();
    }
  });

const searchEpic = (action$, state$) =>
  action$.pipe(
    ofType(SearchActionTypes.SEARCH),
    switchMap(({ payload }) => defer(() => search(state$.value, payload))),
    startWith(searchLoading()),
  );

export const searchRootEpic = combineEpics(
  searchEpic
);
