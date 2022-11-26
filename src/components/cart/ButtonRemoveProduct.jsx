import { useContext } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/cartActions";
import { NotifContext } from "../context/NotifContext";

const ButtonRemoveProduct = ({ product }) => {
  const dispatch = useDispatch();
  const notify = useContext(NotifContext);

  const handleCleanCart = () => {
    dispatch(removeProduct(product));
    notify("Product removed");
  };

  return (
    <button className="remove-product" onClick={() => handleCleanCart()}>
      Remove product
    </button>
  );
};

export default ButtonRemoveProduct;
