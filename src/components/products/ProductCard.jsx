import AddToCartContainer from "./AddToCartContainer";

const ProductCard = ({ product }) => {
  const { name, price, stock } = product;
  return (
    <>
      <div className="product">
        <h4 className="product-title">{name}</h4>
        <div className="product-img"></div>
        <p className="product-price">Price: {price}</p>
        <p className="product-stock">Stock: {stock} </p>
        <AddToCartContainer product={product} />
      </div>
    </>
  );
};

export default ProductCard;
