import React from 'react';
import {Route, IndexRoute, Link} from 'react-router';
import routes from '../data/routes.js';

class Routes {
    getChildrenComponents(route) {
        let children = [];

        if (route.children) {
            for (let i in route.children) {
                children.push(
                    <Route key={i} path={route.children[i].path} component={route.children[i].component}>
                        {this.getChildrenComponents(route.children[i])}
                    </Route>
                );
            }
        }

        return children;
    };

    getComponents() {
        let components = [];

        for (let i in routes) {
            if (routes[i].index) {
                components.push(
                    <IndexRoute key={i} component={routes[i].component}/>
                );
            } else {
                components.push(
                    <Route key={i} path={routes[i].path} component={routes[i].component}>
                        {this.getChildrenComponents(routes[i])}
                    </Route>
                );
            }
        }

        console.log(components)

        return components;
    };

    getSub(route) {
        let sub;

        if (route.children) {
            let children = [];

            for (let i in route.children) {
                let path = route.children[i].path;

                children.push(
                    <div key={i} className="item">
                        <Link to={path} activeClassName="active">
                            {route.children[i].name}
                        </Link>
                        {this.getSub(route.children[i])}
                    </div>
                );
            }

            sub = (<div className="sub">{children}</div>);
        }

        return sub;
    };

    getNavItems() {
        let items = [];

        for (let i in routes) {
            let path = routes[i].path;

            if (!routes[i].excludeNav) {
                items.push(
                    <div key={i} className="item">
                        <Link to={path} activeClassName="active">
                            {routes[i].name}
                        </Link>
                        {this.getSub(routes[i])}
                    </div>
                );
            }
        }

        return items;
    };
}

export default Routes;