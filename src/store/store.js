import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(reducer);

export default store;
