import { CartProduct } from "./CartProduct";

const CartList = ({ products }) => {
  return (
    <>
      <div className="cart-list_container">
        {products.map((product, i) => (
          <CartProduct product={product} key={i} />
        ))}
      </div>
    </>
  );
};

export default CartList;
