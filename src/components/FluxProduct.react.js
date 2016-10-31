var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux product view
var FluxProduct = React.createClass({

  // Add item to cart via Actions
  addToCart: function(event){
    var index = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      price: this.props.selected.price
    }
    FluxCartActions.addToCart(index, update);
    FluxCartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  selectVariant: function(event){
    FluxCartActions.selectProduct(event.target.value);
  },

  // Render product View
  render: function() {
    return (
        <div>
          <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
    );
  },

});

module.exports = FluxProduct;