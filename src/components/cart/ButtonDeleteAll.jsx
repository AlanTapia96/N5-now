import { useDispatch } from "react-redux";
import { cleanCart } from "../../store/actions/cartActions";

const ButtonDeleteAll = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(cleanCart())}>x</button>;
};

export default ButtonDeleteAll;
