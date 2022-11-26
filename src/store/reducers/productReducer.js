export const productReducer = (state = [], action) => {
  if (action.type === "FETCH_PRODUCTS") {
    return action.payload;
  }

  if (action.type === "LOADING_PRODUCTS") {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === "UPDATE_AMOUNT") {
    const currentProduct = action.payload;
    return state.map((product) =>
      product.id === currentProduct.id
        ? { ...product, stock: product.stock + currentProduct.amount }
        : product
    );
  }

  if (action.type === "CREATE_PRODUCT") {
    const newProduct = action.payload;
    console.log(newProduct);
    return [...state, newProduct];
  }

  return state;
};
