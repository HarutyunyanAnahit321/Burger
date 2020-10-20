import React from 'react';
import classes from './Order.module.css';
import PropTypes from 'prop-types';

const Order = ({ ingredients, price }) => {
  const ingredientsData = [];
  for (let ingredient in ingredients) {
    ingredientsData.push({
      name: ingredient,
      amount: ingredients[ingredient]
    });
  }

  const ingredientOutput = ingredientsData.map(ig => {
    return <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
    >
      {ig.name} ({ig.amount})
      </span>
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price <strong>USD {Number.parseFloat(price).toFixed(2)}</strong></p>
    </div>
  )
}
Order.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.string,
}

export default Order; 