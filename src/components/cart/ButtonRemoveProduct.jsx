import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/cartActions";

const ButtonRemoveProduct = ({ product }) => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(removeProduct(product))}>x</button>;
};

export default ButtonRemoveProduct;
