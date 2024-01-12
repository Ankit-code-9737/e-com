// src/components/ProjectPage.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import ProductList from "./ProductList";

const ProjectPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h1 className="text-center">Project Page</h1>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProjectPage;
