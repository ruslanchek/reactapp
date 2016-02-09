import React from 'react'
import Routes from '../../routes/routes.js';

let routes = new Routes();

let Nav = React.createClass({
    render() {
        return (
            <div>
                <nav>
                    {routes.getNavItems()}
                </nav>
            </div>
        )
    }
});

export default Nav;