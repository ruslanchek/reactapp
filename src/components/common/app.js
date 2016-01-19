import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Nav from '../common/nav.js';

const App = React.createClass({
	render() {
		return (
			<div>
				<Nav/>
				{this.props.children}
			</div>
		)
	}
});

export default App;