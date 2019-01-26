import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import './style/index.less';
import './registerServiceWorker';
import App from './app';



ReactDOM.render(<App/>, document.getElementById('root'));