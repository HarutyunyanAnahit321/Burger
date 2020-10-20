import React from 'react';
import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummery.module.css';
import PropTypes from 'prop-types';


const CheckoutSummery = ({ ingredients, checkoutCanceled, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummery}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked={checkoutCanceled}
      >
        CANCEL
      </Button>
      <Button
        btnType="Success"
        clicked={checkoutContinue}
      >
        CONTINUE
      </Button>
    </div>
  );
}
CheckoutSummery.propTypes = {
  ingredients: PropTypes.object,
  checkoutCanceled: PropTypes.func,
  checkoutContinue: PropTypes.func,
}

export default CheckoutSummery;