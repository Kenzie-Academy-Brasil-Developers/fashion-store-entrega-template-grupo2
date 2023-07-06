import { Route, Routes } from "react-router-dom";
import { DashboardHome } from "../pages/DashboardHome";
import { DashboardProducts } from "../pages/DashboardProducts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProductPage } from "../pages/ProductPage";
import { Register } from "../pages/Register";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
//import { AdminProvider } from "../context/AdminContext/AdminContext";

export const RoutesMain = () => {
  const { products } = useContext(ProductContext);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard/home" element={<DashboardHome />} />
      <Route path="dashboard/products" element={
        <DashboardProducts/>
      } />
      <Route path="/" element={<Home />} />
      {products.map((product) => (
        <Route
          key={product.id}
          path={`product/${product.id}`}
          element={<ProductPage product={product} />}
        />
      ))}
    </Routes>
  );
};
