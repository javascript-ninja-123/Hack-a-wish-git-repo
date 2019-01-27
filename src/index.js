import React, { Component } from 'react';
import { createLogger } from 'redux-logger';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';
import { Switch, Router, Route } from 'react-router-dom';

import './style/index.less';
import './registerServiceWorker';

import { rootReducer } from 'reducers';
import { rootEpic } from 'epics';

// -- Containers
import App from './app';
import Search from 'containers/search';
import Profile from 'containers/profile';

// -- const declarations
const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  level: 'log',
  diff: true,
})
const epicMiddleware = createEpicMiddleware();
const history = createHistory();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));