import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import { continueOrder } from '../../../api';
import Spinner from '../../../components/UI/Spinner';
import classes from './ContactData.module.css';
import PropTypes from 'prop-types';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }
  handleOrder = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Anahit Harutyunyan',
        address: {
          country: 'Armenia',
          street: 'TestStreet 1',
          zipCode: '1101',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest',
    };
    continueOrder(order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });

      });
  }
  
  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your mail" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.handleOrder}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
ContactData.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.string,
}

export default ContactData;