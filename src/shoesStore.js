import React, { Component } from "react";
import ProductList from "./productList";
import data from "./data.json";
import Modal from "./modal";

export default class ShoesStore extends Component {
  state = {
    productDetail: null,
  };
  handleBuyProduct = (product) => {
    console.log("ShoesShop ", product);

    this.setState({
      productDetail: product,
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center my-4">Shoes Shop</h1>
        <ProductList products={data} onSelect={this.handleBuyProduct} />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
