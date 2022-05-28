import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, onSelect } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img src={product.image} width="100%" />
          <div className="card-body">
            <div className="card-title">{product.name}</div>
            <p className="card-text">{product.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                onSelect(product);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
