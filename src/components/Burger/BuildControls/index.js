import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl';
import PropTypes from 'prop-types';


const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

function BuildControls({addedIngredient, removeIngredient, disabled, price, purchaseable, ordered}) {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
      {controls.map(control => {
        return <BuildControl
                key={control.label}
                label={control.label}
                added={() => addedIngredient(control.type)}
                removed={() => removeIngredient(control.type)}
                disabled={disabled[control.type]}
              />
      })}
      <button
        className={classes.OrderButton}
        disabled={!purchaseable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  addedIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  price: PropTypes.number,
  purchaseable: PropTypes.bool,
  ordered: PropTypes.func,
}

export default BuildControls;