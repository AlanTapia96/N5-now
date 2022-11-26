import { useContext } from "react";
import { useDispatch } from "react-redux";
import { cleanCart } from "../../store/actions/cartActions";
import { NotifContext } from "../context/NotifContext";

const ButtonCleanCart = () => {
  const dispatch = useDispatch();
  const notify = useContext(NotifContext);

  const handleCleanCart = () => {
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
