export const productReducer = (state = [], action) => {
  if (action.type === "INIT") {
    return action.payload;
  }
  if (action.type === "UPDATE_AMOUNT") {
    const currentProduct = action.payload;
    return state.map((product) =>
      product.id === currentProduct.id
        ? { ...product, stock: product.stock + currentProduct.amount }
        : product
    );
  }

  return state;
};

//   if (action.type === "created") {
//     return [...state, action.payload];
//   }
