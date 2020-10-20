import React from 'react'
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import Backdrop from '../../UI/Backdrop';
import classes from './SideDrawer.module.css';
import PropTypes from 'prop-types';

const SideDrawer = ({ closed, show }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={show} clicked={closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      </>
  );
};

SideDrawer.propTypes = {
  closed: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default SideDrawer;