import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";
import ButtonDeleteAll from "./ButtonDeleteAll";
import ButtonRemoveProduct from "./ButtonRemoveProduct";

const CartContainer = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <>
      <h2>Cart</h2>
      <ButtonDeleteAll />
      {cart.map((product, i) => (
        <div key={i}>
          <ProductCard product={product} />
          <ButtonRemoveProduct product={product} />
        </div>
      ))}
    </>
  );
};

export default CartContainer;
