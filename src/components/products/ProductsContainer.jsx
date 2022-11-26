import { useSelector } from "react-redux";
import ProductList from "./ProductList";
// import { useState, useEffect } from "react";
// import {
//   fetchProducts,
//   loadingProducts,
// } from "../../store/actions/productsActions";
// import { useSelector, useDispatch } from "react-redux";
// import { PropagateLoader } from "react-spinners";
// import productService from "../../services/product";

const ProductsContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsLoading(true);
  //   productService.getProducts().then((products) => {
  //     dispatch(fetchProducts(products));
  //     setIsLoading(false);
  //   });
  // }, []);

  // return isLoading ? (
  //   <PropagateLoader
  //     loading={isLoading}
  //     size={15}
  //     aria-label="Loading Spinner"
  //     data-testid="loader"
  //   />
  // ) : (
  //   <ProductList products={products} />
  // );
  const products = useSelector((state) => state.products);

  return <ProductList products={products} />;
};

export default ProductsContainer;
