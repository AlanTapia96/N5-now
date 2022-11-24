export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const delFromCart = (product, all = false) =>
  all
    ? { type: "REMOVE_ALL", payload: product }
    : { type: "REMOVE_ONE", payload: product };

export const clearCart = () => ({ type: "CLEAR_CART" });
