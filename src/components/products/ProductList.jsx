import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <h2>No hay data</h2>
      ) : (
        <div className="products-container">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
