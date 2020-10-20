import React from 'react';
import classes from './DrawerToggle.module.css';
import PropTypes from 'prop-types';

const DrawerToggle = ({clicked}) => {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

DrawerToggle.propType = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;