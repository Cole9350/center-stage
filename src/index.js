import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import indexRoutes from 'routes/index.jsx';

import 'assets/scss/material-kit-react.css?v=1.1.0';

var hist = createBrowserHistory();
ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={`${process.env.PUBLIC_URL}` + prop.path} key={key} component={prop.component} />;
			})}
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
