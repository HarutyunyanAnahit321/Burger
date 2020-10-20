import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from './Burger.module.css';
import PropTypes from 'prop-types';

function Burger({ ingredients }) {
  let transformIngredients = Object.keys(ingredients)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((ingredient, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please, start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );

};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
}; 

export default Burger;