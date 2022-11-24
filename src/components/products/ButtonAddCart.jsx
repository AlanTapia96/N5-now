import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const ProductAddCart = ({ product, amountToBuy }) => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { cart } = state.cart;

  return (
    <button
      type="button"
      className="add-cart"
      disabled={amountToBuy === 0}
      onClick={() => dispatch(addToCart(product))}
    >
      Add to cart
    </button>
  );
};

export default ProductAddCart;
