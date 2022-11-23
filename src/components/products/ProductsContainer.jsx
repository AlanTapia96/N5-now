import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import { ProductContextProvider } from "../../context/ProductContext";

const ProductsContainer = () => {
  useEffect(() => {}, []);

  return (
    <ProductContextProvider>
      <ProductsList />
    </ProductContextProvider>
  );
};

export default ProductsContainer;
