import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact to={props.link} activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  )    
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};


export default NavigationItem;

