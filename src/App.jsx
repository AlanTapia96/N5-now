import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Router from "./router/Router";
import productService from "./services/product";
import { initProducts } from "./store/actions/productsActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [load, setIsLoad] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    productService.getProducts().then((products) => {
      dispatch(initProducts(products));
      setIsLoad(true);
    });
  }, []);

  return <>{load 
    ?
     <Router /> 
     : <h1>Hola</h1>}</>;
}

export default App;
