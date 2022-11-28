import { currencyConverter } from "../../helper/helper";
import AddToCartContainer from "./AddToCartContainer";

const ProductCard = ({ product }) => {
  const { name, price, stock } = product;
  return (
    <>
      <div className="product">
        <h4 className="product-title">{name}</h4>
        <div className="product-img">
          <img />
        </div>
        <p className="product-price mb-1">Price: {currencyConverter(price)}</p>
        <p className="product-stock">Stock: {stock} </p>
        <AddToCartContainer product={product} />
      </div>
    </>
  );
};

export default ProductCard;
