import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Router from "./router/Router";
import productService from "./services/product";
import { fetchProducts } from "./store/actions/productsActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { PropagateLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    productService.getProducts().then((products) => {
      dispatch(fetchProducts(products));
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <PropagateLoader
          className="spinner"
          loading={isLoading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Router />
      )}
    </>
  );
}

export default App;
