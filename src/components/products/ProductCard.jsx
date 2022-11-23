import AddCartContainer from "./AddCartContainer";

const ProductCard = ({ product }) => {
  const { name, price, amount } = product;
  return (
    <>
      <div className="product">
        <h3 className="product-title">{name}</h3>
        <div className="product-img"></div>
        <p className="product-price">Price: {price}</p>
        <p className="product-amount">Amount: {amount}</p>
        <AddCartContainer product={product} />
      </div>
    </>
  );
};

export default ProductCard;
