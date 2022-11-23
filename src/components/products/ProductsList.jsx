import { useContext, useState, useEffect } from "react";
import productService from "../../services/product";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  //   const { products, isLoading } = useContext(ProductContext);
  //   console.log(products);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setIsLoading(true);
    const products = await productService.getProducts();
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <h2>No hay data</h2>
      ) : (
        <div className="products-container">
          {products.products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
