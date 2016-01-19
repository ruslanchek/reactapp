import React from 'react'
import Routes from '../../routes/routes.js';

let routes = new Routes();

let Nav = React.createClass({
  render() {
    return (
      <div>
		  {routes.getNavItems()}
      </div>
    )
  }
});

export default Nav;