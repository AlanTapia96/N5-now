import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./router/Router";
import productService from "./services/product";
import { initProducts } from "./store/reducers/productReducer";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    productService.getProducts().then((products) => {
      dispatch(initProducts(products));
    });
  }, []);

  return <Router />;
}

export default App;
