import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuthenticated ?  <NavigationItem link="/orders" active>Orders</NavigationItem> : null}
    {props.isAuthenticated ? <NavigationItem link="/logout" active>Logout</NavigationItem> : <NavigationItem link="/auth" active>Login</NavigationItem>} 
  </ul>
);

export default navigationItems;