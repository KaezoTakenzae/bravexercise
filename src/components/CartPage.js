import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ItemMenu from './ItemMenu';
import BasketButtons from './BasketButtons';
import products from '../data/bras';
var FluxCartActions = require('../actions/FluxCartActions');
var FluxCart = require('./FluxCart.react');
var CartStore = require('../stores/CartStore');


function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

var CartPage = React.createClass ({
  
  getInitialState: function() {
    return getCartState();
  },
  
  addToCart: function(event){
    const id = this.props.params.id;
    const item = products.filter((item) => item.id === id)[0];
    if (!item) {
      return <NotFoundPage/>;
    }
    console.log("Id: " + id);
    console.log("Price: " + item.price);
    var update = {
      name: item.name,
      price: item.price
    }
    FluxCartActions.addToCart(id, update);
    FluxCartActions.updateCartVisible(true);
  },

  render() {
    const id = this.props.params.id;
    const item = products.filter((item) => item.id === id)[0];
    if (!item) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${item.cover})` };
    return (
      <div className="item-full">
        <ItemMenu/>
        <div className="item">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${item.image}`}/>
            <h2 className="name">{item.name}</h2>
            <p>£{item.price}</p>
          </div>
          <button onClick={this.addToCart}>Add Me Please</button>
        </div>
        <div className="flux-cart-app">
        	<FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
      	</div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
})

module.exports = CartPage;