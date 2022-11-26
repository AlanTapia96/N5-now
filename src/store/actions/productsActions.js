export const fetchProducts = (products) => ({
  type: "FETCH_PRODUCTS",
  payload: products,
});

export const updateAmount = (product) => ({
  type: "UPDATE_AMOUNT",
  payload: product,
});

export const createProduct = (product) => ({
  type: "CREATE_PRODUCT",
  payload: product,
});

export const loadingProducts = (status) => ({
  type: "LOADING_PRODUCTS",
  payload: status,
});
