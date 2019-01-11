import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch, browserHistory } from "react-router";
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import {Provider} from 'react-redux';
import routes from './routes';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import photoReducer from './reducers/photoReducer';

import createHistory from 'history/createBrowserHistory'

import Home from './containers/home';
import Auth from './containers/auth';
import DetailPhoto from './containers/detail-photo';

window.localStorage.setItem('start', 0);
window.localStorage.setItem('end', 10);




const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        photoReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>,
    document.querySelector('#app')
);



