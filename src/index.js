import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import LandingPage from 'views/LandingPage/LandingPage.jsx';
var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<LandingPage />
	</Router>,
	document.getElementById('root')
);
