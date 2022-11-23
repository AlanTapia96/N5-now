import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsContainer from "../components/products/ProductsContainer";
// import { Navbar } from "../navbar/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/cart" element={<ProductsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}