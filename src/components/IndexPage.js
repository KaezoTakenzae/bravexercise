import React from 'react';
import ItemPreview from './ItemPreview';
import products from '../data/bras';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="items-selector">
          {products.map(braData => <ItemPreview key={braData.id} {...braData} />)}
        </div>
        <section id="flux-cart"></section>
      </div>
    );
  }
}