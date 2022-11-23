import { useState, useEffect, createContext } from "react";
import productService from "../services/product";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const products = await productService.getProducts();
      setProducts(products);
      setIsLoading(false);
    };

    console.log("Products", products);

    getProducts();
  }, []);

  const addProduct = (product) => {
    setProducts({ ...products, product });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
