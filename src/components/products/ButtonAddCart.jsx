import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductAddCart = ({ product, amountToBuy }) => {
  const { addProduct } = useContext(CartContext);

  const handleAddProduct = () => {
    addProduct({ product, amountToBuy });
  };

  return (
    <button
      type="button"
      className="add-cart"
      disabled={amountToBuy === 0}
      onClick={handleAddProduct}
    >
      Add to cart
    </button>
  );
};

export default ProductAddCart;
