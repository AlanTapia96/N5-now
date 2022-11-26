const cartStorage =
  localStorage.getItem("cartStorage") !== null
    ? JSON.parse(localStorage.getItem("cartStorage"))
    : { cart: [], total: 0 };

console.log("holas");

const initialState = cartStorage;

export function cartReducer(state = initialState, action) {
  const currentProduct = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
      const isProductInCart = state.cart.find(
        (product) => product.id === currentProduct.id
      );
      const price = currentProduct.amount * currentProduct.price;
      return isProductInCart
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === currentProduct.id
                ? {
                    ...product,
                    amount: product.amount + currentProduct.amount,
                    totalPrice: product.totalPrice + price,
                  }
                : product
            ),
            total: state.total + price,
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              { ...currentProduct, amount: 1, totalPrice: price },
            ],
            total: state.total + price,
          };

      localStorage.setItem();
    }
    case "REMOVE_PRODUCT": {
      const product = state.cart.find(
        (product) => product.id === currentProduct.id
      );
      return {
        ...state,
        total: state.total - product.totalPrice,
        cart: state.cart.filter((product) => product.id !== currentProduct.id),
      };
    }
    case "CLEAN_CART":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
