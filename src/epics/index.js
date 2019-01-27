import { combineEpics } from 'redux-observable';

// -- Epics
import { searchRootEpic } from 'epics/search';
import { fetchKidProfileRootEpic } from 'epics/profile';

export const rootEpic = combineEpics(searchRootEpic, fetchKidProfileRootEpic);