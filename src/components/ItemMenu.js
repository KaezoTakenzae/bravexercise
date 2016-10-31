import React from 'react';
import { Link } from 'react-router';
import products from '../data/bras';

export default class ItemMenu extends React.Component {
  render() {
    return (
      <nav className="products-menu">
        {products.map(menuItem => {
          return <Link key={menuItem.id} to={`/bra/${menuItem.id}`} activeClassName="active">
            {menuItem.name}
          </Link>;
        })}
      </nav>
    );
  }
}