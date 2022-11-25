import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { updateAmount } from "../../store/actions/productsActions";

const AddToCartButton = ({ product, amount, stock, setAmount }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount }));
    dispatch(updateAmount({ ...product, amount: amount * -1 }));

    stock > amount ? setAmount(1) : setAmount(0);
  };

  return (
    <button
      type="button"
      className="add-cart"
      disabled={amount === 0}
      onClick={() => handleAddToCart()}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
