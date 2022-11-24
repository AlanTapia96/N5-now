export function cartReducer(state = { cart: [] }, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newProduct = action.payload;
      const productInCart = state.cart.find(
        (product) => product.id === newProduct.id
      );
      return productInCart
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === newProduct.id
                ? { ...product, amount: product.amount + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newProduct, amount: 1 }],
          };
    }
    case "REMOVE_ONE_FROM_CART": {
      const productToDelte = state.cart.find(
        (product) => product.id === action.payload
      );

      return productToDelte > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, amount: product.amount - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
    }
    case "REMOVE_ALL_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }
    case "CLEAN_CART":
      return [];

    default:
      return state;
  }
}
