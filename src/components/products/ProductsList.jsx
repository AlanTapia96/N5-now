import { useState } from "react";
import { useSelector } from "react-redux";
import AddToCartContainer from "./AddToCartContainer";

import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state) => state.products);

  return (
    <>
      {isLoading ? (
        <h2>No hay data</h2>
      ) : (
        <div className="products-container">
          {products.map((product, i) => (
            <div key={i}>
              <ProductCard product={product} />
              <AddToCartContainer product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
