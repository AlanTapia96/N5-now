import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ButtonCartNav = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <button type="button" className="nav-button btn btn-secondary">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <div className={cart.length === 0 ? "empty" : "notEmpty"}>
        <p className="buttonCant">{cart.length}</p>
      </div>
    </>
  );
};

export default ButtonCartNav;
