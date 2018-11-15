import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  //pure JS, transforms a JS object into an array of strings
  //first map creats an array with empty elements equal to the number of individual ingredients
  //second map populates the array with a unique key and the correct type value to match the burger css 
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce( (arr, el) => {
      return arr.concat(el)
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
	return (
		<div className={classes.Burger}>
		  <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
	);
};

export default burger;