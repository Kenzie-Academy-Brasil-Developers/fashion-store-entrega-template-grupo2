import { Route, Routes } from "react-router-dom";
import { DashboardHome } from "../pages/DashboardHome";
import { DashboardProducts } from "../pages/DashboardProducts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProductPage } from "../pages/ProductPage";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard/home" element={<DashboardHome />} />
      <Route path="dashboard/products" element={<DashboardProducts />} />

      <Route path="/" element={<Home />} />
      <Route
        path="product"
        element={
          <ProductPage
            productName="Jaqueta Preta"
            productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            productPrice={500}
            imgSource="https://thumb.braavo.me/saint/1000/1861767334.webp"
          />
        }
      />
    </Routes>
  );
};
