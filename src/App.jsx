import "./App.scss";
import { CartContextProvider } from "./context/CartContext";
import Router from "./router/Router";

function App() {
  return (
    <CartContextProvider>
      <Router />;
    </CartContextProvider>
  );
}

export default App;
