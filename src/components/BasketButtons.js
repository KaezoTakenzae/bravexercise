var React = require('react');
import products from '../data/bras';
//var FluxCartActions = require('../actions/FluxCartActions');

// Flux product view
var BasketButtons = React.createClass({

  // Add item to cart via Actions
  addToCart: function(event){
    console.log(this);
    console.log(this.children);
	const id = this.props.params.id;
	const item = products.filter((item) => item.id === id)[0];
    if (!item) {
      return <NotFoundPage/>;
    }
    console.log(id + " " + item.price);
	/*var request = require('request');
	request('http://www.google.com', function (error, response, body) {
  	  if (!error && response.statusCode == 200) {
    	console.log(body) // Print the google web page.
  	  }
	})*/
  },
  
  removeFromCart: function(event){
  	console.log("Remove functions");
  },

  // Select product variation via Actions
  /*selectVariant: function(event){
    FluxCartActions.selectProduct(event.target.value);
  },*/

  // Render product View
  render: function() {
    return (
      <div>
        <button onClick={this.addToCart}>Add to basket</button>
        <button onClick={this.removeFromCart}>Remove from basket</button>
      </div>
    );
  },

});

module.exports = BasketButtons;