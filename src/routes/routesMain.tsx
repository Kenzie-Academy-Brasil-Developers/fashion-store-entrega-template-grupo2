import { Route, Routes } from "react-router-dom";
import { AdmPage } from "../components/pages/AdminPage";
import { Home } from "../components/pages/Home";
import { LoginUser } from "../components/pages/login/Login";
import { ProductPage } from "../components/pages/ProductPage";
import { RegisterUser } from "../components/pages/register/SignUp";
import { Dashboard } from "../components/pages/Dashboard";


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<LoginUser/>} />
            <Route path="register" element={<RegisterUser/>} />
            <Route path="product" element={<ProductPage/>}/>
            <Route path="admpage" element={<AdmPage/>} />
            <Route path="admconfig" element={<Dashboard/>} />
        </Routes>
    )
}