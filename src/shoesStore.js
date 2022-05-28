import React, { Component } from "react";
import ProductList from "./productList";
import data from "./data.json";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
    };
  }
  handleBuyProduct = (product) => {
    this.setState(
      {
        productDetail:  product,
      }
    );
  };
  render() {
    return (
      <div>
        <h1 className="text-center my-4">Shoes Shop</h1>
        <ProductList products={data} onSelect={this.handleBuyProduct} />
        <Modal product={this.state.productDetail} />
      </div>
    );
  }
}
