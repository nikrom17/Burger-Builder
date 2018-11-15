import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li> );
  });
	return (
		<Aux>
		  <h3>Your Order</h3>
      <p>Your burger contains the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <Button btnType="Danger" clicked={props.purchaseCancelled} >Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Add to Cart</Button>
		</Aux>
	);

};

export default orderSummary;