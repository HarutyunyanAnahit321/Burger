import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummer from '../../components/Burger/OrderSummery';
import withErrorHandler from '../../hoc/withErrorHandler';
import { instance, getIngredients } from '../../api';
import Spinner from '../../components/UI/Spinner';
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    getIngredients()
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => { this.setState({error: true})});
  }
  updatePurchaseState () {
    const ingredients = {
      ...this.state.ingredients
    };
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchaseable: sum > 0})
  }
  handleAddIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, () => this.updatePurchaseState());
  };

  handleRemoveIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, () => this.updatePurchaseState());
  };  

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handlePurchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  handlePurchaseContinue = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummer = null;
    let burger = this.state.error ? <p>ingredients can't be loaded</p> : <Spinner />;

    if (this.state.ingredients) {
      burger =
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addedIngredient={this.handleAddIngredient}
            removeIngredient={this.handleRemoveIngredient}
            disabled={disableInfo}
            purchaseable={this.state.purchaseable}
            ordered={this.handlePurchase}
            price={this.state.totalPrice}

          />
        </>;
      orderSummer = <OrderSummer
        price={this.state.totalPrice}
        ingredients={this.state.ingredients}
        purchaseCanceled={this.handlePurchaseCancel}
        purchaseContinued={this.handlePurchaseContinue}
      />;
    }
    if (this.state.loading) {
      orderSummer = <Spinner />
    }

    return (
      <>
        {burger} 
        <Modal show={this.state.purchasing} modalClosed={this.handlePurchaseCancel}>
          {orderSummer}
        </Modal>
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, instance);