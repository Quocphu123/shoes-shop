import React, { Component } from "react";
import ProductItem from "./productItem";

export default class ProductList extends Component {


  render() {
    const { products, onSelect } = this.props;

    return (
      <div className="container">
        <div className="row">
          {products.map((item) => (
            <ProductItem
              key={item.id}
              product={item}
            
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    );
  }
}
