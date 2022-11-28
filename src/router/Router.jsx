import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "../components/cart/CartContainer";
import ProductsContainer from "../components/products/ProductsContainer";
import { NavbarComp as Navbar } from "../components/navbar/Navbar";
import ProductForm from "../components/forms/product/ProductForm";
import { Home } from "../components/home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/form" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}
