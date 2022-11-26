import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "../components/cart/CartContainer";
import ProductsContainer from "../components/products/ProductsContainer";
import { NavbarComp as Navbar } from "../components/navbar/Navbar";
import AddProductForm from "../components/forms/product/AddProductForm";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/form" element={<AddProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}
