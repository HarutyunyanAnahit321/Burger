import React from 'react';
import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({ show , clicked}) => {
  return show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;