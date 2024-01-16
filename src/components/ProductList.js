// src/components/ProductList.js
import React, { useState } from "react";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
];

const ProductList = ({ onAddToCart }) => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleClick = () => {
    setSuccessMessage(
      <div className="SuccessMsg">Your data successfully send to Cart</div>
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  const handleCombinedClick = (product) => {
    onAddToCart(product);
    handleClick();
  };

  return (
    <div>
      <h2 className="text-center mt-3 mb-5">Product List</h2>
      <ul className="d-block d-sm-flex ps-0">
        {products.map((product) => (
          <li className="product mb-2" key={product.id}>
            {product.name} - ${product.price}
            <button
              className="mt-3"
              onClick={() => handleCombinedClick(product)}
            >
              Add to Cart
            </button>
            {successMessage && <div>{successMessage}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
