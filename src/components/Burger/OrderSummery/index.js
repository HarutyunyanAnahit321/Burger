import React from 'react';
import Button from '../../UI/Button';
import PropTypes from 'prop-types';

function OrderSummary({ingredients, price, purchaseCanceled, purchaseContinued}) {
  const ingredientSummery = Object.keys(ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {ingredients[ingredientKey]}
        </li>
      );
    })
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummery}
      </ul>
      <p><strong>Total Price: {price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled} >CANCEL</Button>
      <Button btnType="Success" clicked={purchaseContinued} >CONTINUE</Button>

    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
}

export default OrderSummary;