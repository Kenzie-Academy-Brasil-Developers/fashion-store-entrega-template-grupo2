import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";


export const ProtectedRoutes = () =>{
    const {admin} = useContext(UserContext);

    return admin ? <Outlet/>: <Navigate to="/"/>
}