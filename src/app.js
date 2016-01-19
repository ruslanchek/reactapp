import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../assets/styles/styles.styl'

import App from './components/common/app.js';
import NoMatch from './components/pages/nomatch.js';
import Routes from './routes/routes.js';

let routes = new Routes();

React.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			{routes.getComponents()}
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
), document.body);