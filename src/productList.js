import React, { Component } from "react";
import ProductItem from "./productItem";

export default class ProductList extends Component {


  handleBuyProduct = (product) => {
      console.log(product);
  };

  render() {
    const { products, onSelect } = this.props;

    return (
      <div className="container">
        <div className="row">
          {products.map((item) => (
            <ProductItem
              key={item.id}
              product={item}
            
              onSelect={this.handleBuyProduct}
            />
          ))}
        </div>
      </div>
    );
  }
}
