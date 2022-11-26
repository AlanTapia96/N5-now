import AddToCartContainer from "../products/AddToCartContainer";
import ButtonRemoveProduct from "./ButtonRemoveProduct";

export const CartProduct = ({ product }) => {
  const { name, amount, totalPrice } = product;
  return (
    <div className="cart-product">
      <div className="cart-product-img"></div>
      <div className="cart-product-data">
        <p className="cart-product-data_name">{name}</p>
        <p className="cart-product-data_price">Amount: {amount}</p>
        <p className="cart-product-data_stock">Total: {totalPrice} </p>
        <ButtonRemoveProduct product={product} />
        {/* <AddToCartContainer product={product} /> */}
      </div>
    </div>
  );
};
