import { useSelector } from "react-redux";
import { currencyConverter } from "../helper/helper";
import ButtonCleanCart from "./ButtonCleanCart";
import CartList from "./CartList";

const CartContainer = () => {
  const { cart, total } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ButtonCleanCart />
          <CartList products={cart} />
          <h2 className="mt-5">Total: {currencyConverter(total)} </h2>
        </>
      ) : (
        <h4 className="mt-5">You have not added products to the cart yet</h4>
      )}
    </div>
  );
};

export default CartContainer;
