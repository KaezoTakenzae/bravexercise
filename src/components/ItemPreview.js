import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {
  render() {
    return (
      <Link to={`/bra/${this.props.id}`}>
        <div className="item-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="price">£{this.props.price}</span>
        </div>
      </Link>
    );
  }
}