import ButtonRemoveProduct from "./ButtonRemoveProduct";
import { currencyConverter } from "../../helper/helper";

export const CartProduct = ({ product }) => {
  const { name, amount, totalPrice } = product;
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img alt={name} />
      </div>
      <div className="cart-product-data">
        <p className="cart-product-data_name">{name}</p>
        <p className="cart-product-data_price">Amount: {amount}</p>
        <p className="cart-product-data_stock">
          Total: {currencyConverter(totalPrice)}{" "}
        </p>
        <ButtonRemoveProduct product={product} />
      </div>
    </div>
  );
};
