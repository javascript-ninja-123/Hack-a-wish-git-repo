import { combineEpics } from 'redux-observable';

// -- Epics
import { searchRootEpic } from 'epics/search';


export const rootEpic = combineEpics(searchRootEpic);