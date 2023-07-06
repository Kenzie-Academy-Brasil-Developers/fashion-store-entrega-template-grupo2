import { Route, Routes } from "react-router-dom";
import { DashboardHome } from "../pages/DashboardHome";
import { DashboardProducts } from "../pages/DashboardProducts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProductPage } from "../pages/ProductPage";
import { Register } from "../pages/Register";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const RoutesMain = () => {
  const { selectedProduct } = useContext(CartContext);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard/home" element={<DashboardHome />} />
      <Route path="dashboard/products" element={<DashboardProducts />} />
      <Route path="/" element={<Home />} />
      <Route
        path={`product/${selectedProduct?.id}`}
        element={<ProductPage />}
      />
    </Routes>
  );
};
