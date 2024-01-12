// src/components/CartPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, removeItem } from "../features/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <h1 className="text-center mb-3">Cart Page</h1>
      <ul>
        {cartItems.map((item) => (
          <li className="product" key={item.id}>
            {item.name} - ${item.price}
            <button className="mt-3" onClick={() => handleRemoveFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
