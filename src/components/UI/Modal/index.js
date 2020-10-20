import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/index';
import PropTypes from 'prop-types';

class Modal extends Component { 

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.show !== this.props.show) || (nextProps.children !== this.props.children); 
  };
  
  render() {
    const { show, modalClosed } = this.props;
    return (
    <>
      <Backdrop show={show} clicked={modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {this.props.children}
      </div>
    </>
  )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
};

export default Modal;