import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("cartStorage", JSON.stringify(store.getState().cart));
});

export default store;
