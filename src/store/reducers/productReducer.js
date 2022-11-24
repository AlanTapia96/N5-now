export const productReducer = (state = [], action) => {
  if (action.type === "init") {
    return action.payload;
  }
  return state;
};

export const initProducts = (products) => {
  return {
    type: "init",
    payload: products,
  };
};

//   if (action.type === "created") {
//     return [...state, action.payload];
//   }
