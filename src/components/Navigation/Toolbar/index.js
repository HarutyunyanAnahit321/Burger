import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle';
import classes from './Toolbar.module.css';
import PropTypes from 'prop-types';

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={classes.Toolbar}>
    <DrawerToggle clicked={drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo height="80%"/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
  );
};

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
}

export default Toolbar;