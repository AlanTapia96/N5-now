export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeProduct = (product) => ({
  type: "REMOVE_PRODUCT",
  payload: product,
});

export const cleanCart = () => ({ type: "CLEAN_CART" });
