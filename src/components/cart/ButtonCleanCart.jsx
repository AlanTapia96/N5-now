import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanCart } from "../../store/actions/cartActions";
import { updateAmount } from "../../store/actions/productsActions";
import { NotifContext } from "../context/NotifContext";

const ButtonCleanCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notify = useContext(NotifContext);

  const handleCleanCart = () => {
    cart.forEach((product) => dispatch(updateAmount(product)));
    dispatch(cleanCart());
    notify("Cart cleaned");
  };

  return (
    <button className="clean-cart" onClick={() => handleCleanCart()}>
      Clean cart
    </button>
  );
};

export default ButtonCleanCart;
