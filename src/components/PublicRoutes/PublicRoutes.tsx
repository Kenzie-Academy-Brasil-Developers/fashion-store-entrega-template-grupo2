import { useContext } from "react"
import { UserContext } from "../../context/UserProvider"
import { Navigate, Outlet } from "react-router-dom"


export const PublicRouts = () =>{
    const {admin} = useContext(UserContext)

    return !admin ? <Outlet/> : <Navigate to="/dashboard/home"/>
}