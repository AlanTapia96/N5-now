import { useSelector } from "react-redux";
import ButtonCleanCart from "./ButtonCleanCart";
import CartList from "./CartList";

const CartContainer = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ButtonCleanCart />
      <CartList products={cart} />
    </div>
  );
};

export default CartContainer;
