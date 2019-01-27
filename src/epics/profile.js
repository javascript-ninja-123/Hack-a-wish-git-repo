import { ProfileActionTypes } from 'actions/types';
import { fetchKidProfileFailed, fetchKidProfileFulfilled, fetchKidProfileLoading } from 'actions';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, catchError, startWith } from 'rxjs/operators';
import { defer, Observable } from 'rxjs';

// -- User Imports
import config from 'config';
import { request } from 'utils/request';
import fetchKidProfileData from 'utils/request/mocks/kid-profile.json';

const fetchKidProfile = (value, payload) =>
  Observable.create(async observer => {
    try {

      let data;

      if (config.enableMock) {
        data = fetchKidProfileData;
      } else {
        //TODO: Put real request when API is ready
        data = await request.post(`${config.baseUrl}/kid-profile/`, {
          body: JSON.stringify(payload),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //TODO: Auth Here
          },
          //params: params,
        });
      }

      observer.next(fetchKidProfileFulfilled(data));
    } catch (err) {
      observer.next(fetchKidProfileFailed(err));
    } finally {
      observer.complete();
    }
  });

const fetchKidProfileEpic = (action$, state$) =>
  action$.pipe(
    ofType(ProfileActionTypes.FETCH_KID_PROFILE),
    switchMap(({ payload }) => defer(() => fetchKidProfile(state$.value, payload))),
    startWith(fetchKidProfileLoading()),
  );

export const fetchKidProfileRootEpic = combineEpics(
  fetchKidProfileEpic
);
