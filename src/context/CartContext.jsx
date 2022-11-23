import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const productStorage = JSON.parse(localStorage.getItem("productsCart"));
    const totalStorage = JSON.parse(localStorage.getItem("totalProducts"));

    if (totalStorage > 0) {
      setProductsCart(productStorage);
      setTotalProducts(totalStorage);
    }
  }, []);

  useEffect(() => {
    const productStorage = JSON.stringify(productsCart);
    localStorage.setItem("productsCart", productStorage);
    localStorage.setItem("totalProducts", totalProducts);
  }, [productsCart, totalProducts]);

  const addProduct = (product) => {
    if (isInCart(product.product.id)) {
    } else {
      setProductsCart([
        ...productsCart,
        {
          product,
        },
      ]);
      setTotalProducts((prev) => prev + 1);
    }
  };

  const deleteProduct = (product) => {
    const deleted = productsCart[product.progress].filter(
      (t) => t.id !== product.id
    );
    setProductsCart((prev) => ({ ...prev, [product.progress]: deleted }));
    setTotalProducts((prev) => prev - 1);
  };

  const changeAmount = (product, newStatus) => {
    const deleted = productsCart[product.progress].filter(
      (t) => t.id !== product.id
    );
    const productModifed = { ...product, progress: newStatus };
    setProductsCart((prev) => ({
      ...prev,
      [product.progress]: deleted,
      [newStatus]: [...productsCart[newStatus], productModifed],
    }));
  };

  const isInCart = (id) => productsCart.find((product) => product.id === id);

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProduct,
        totalProducts,
        deleteProduct,
        changeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
