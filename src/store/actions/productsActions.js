export const initProducts = (products) => ({
  type: "INIT",
  payload: products,
});

export const updateAmount = (product) => ({
  type: "UPDATE_AMOUNT",
  payload: product,
});
