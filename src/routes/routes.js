import React from 'react';
import {Route, IndexRoute, Link} from 'react-router';
import Page1 from '../components/pages/page1.js';
import Homepage from '../components/pages/homepage.js';

const routes = [
	{
		path: 'page1',
		name: 'Page 1',
		component: Page1,
		index: false
	},
	{
		path: '/',
		name: 'Homepage',
		component: Homepage,
		index: true
	}
];

class Routes {
	getComponents(){
		let components = [];

		for (let i in routes) {
			if(routes[i].index){
				components.push(<IndexRoute component={routes[i].component}/>);
			} else {
				components.push(<Route path={routes[i].path} component={routes[i].component} />);
			}
		}

		return components;
	};

	getNavItems(){
		let items = [];

		for (let i in routes) {
			items.push(<li><Link to={routes[i].path} activeClassName="active">{routes[i].name}</Link></li>);
		}

		return items;
	};
}

export default Routes;