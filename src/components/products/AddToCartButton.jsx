import { memo, useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { updateAmount } from "../../store/actions/productsActions";
import { NotifContext } from "../context/NotifContext";

const AddToCartButton = ({ product, amount, stock, setAmount }) => {
  const dispatch = useDispatch();
  const notify = useContext(NotifContext);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount }));
    dispatch(updateAmount({ ...product, amount: amount * -1 }));
    stock > amount ? setAmount(1) : setAmount(0);
    notify("Product added");
  };

  return (
    <button
      type="button"
      className="add-to-cart_button"
      disabled={amount === 0}
      onClick={() => handleAddToCart()}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
