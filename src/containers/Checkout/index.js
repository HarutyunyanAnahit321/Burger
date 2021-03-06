import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummery from '../../components/Order/CheckoutSummery';
import ContactData from './ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients, totalPrice: price });
  }
  handleCheckoutCanceled = () => {
    this.props.history.goBack();
  }; 

  handleCheckoutContinue = () => {
    this.props.history.push('/checkout/contact-data');
  };  

  render() {
    return (
      <div>
        <CheckoutSummery
          ingredients={this.state.ingredients}
          checkoutCanceled={this.handleCheckoutCanceled}
          checkoutContinue={this.handleCheckoutContinue}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>} 
          />
      </div>
    )
  }
}

export default Checkout;