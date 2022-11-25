const ProductCard = ({ product }) => {
  const { name, price, stock } = product;
  return (
    <>
      <div className="product">
        <h3 className="product-title">{name}</h3>
        <div className="product-img"></div>
        <p className="product-price">Price: {price}</p>
        <p className="product-stock">Stock: {stock}</p>
      </div>
    </>
  );
};

export default ProductCard;
