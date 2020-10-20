import React from 'react';
import classes from './BuildControl.module.css';
import PropTypes from 'prop-types';

function BuildControl({label, added, removed, disabled}) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>
        {label}
      </div>
      <button
        className={classes.Less}
        onClick={removed}
        disabled={disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={added}>More</button>
    </div>
  )
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default BuildControl;