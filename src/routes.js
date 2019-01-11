import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/home';
import Auth from './containers/auth';
import DetailPhoto from './containers/detail-photo';

export default (
	<div>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/photo/:id" component={DetailPhoto} />
    </div>
);
