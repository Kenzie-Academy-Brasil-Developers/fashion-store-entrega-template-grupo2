import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../Services/Api";
import { ReactNode, createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface userProviderProps {
    children: ReactNode
}

export interface registerAdmProps{
    name: string
    email: string
    password: string
    confirm: string
}

export interface loginAdmProps{
    email: string
    password: string
}

export const UserContext = createContext({});


export const UserProvider = ({children}: userProviderProps) =>{
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState(null)
    const navigate = useNavigate();
    const {reset} = useForm()
    const location = useLocation();
    const CurrentPath = location.pathname

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID")
        const loadUser = async () => {
            try{
                setLoading(true)
                const {data} = await api.get(`/users/${id}`, { 
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setAdmin(data);
                navigate(CurrentPath);
            }catch(error){
            }finally{
                setLoading(false)
            }
        }
        if(token && id){
            loadUser();
        }
    }, [])

    const LoginAdm = async (formData : loginAdmProps) => {
        try {
          setLoading(true);
          const { data } = await api.post("/login", formData);
          localStorage.setItem("@TOKEN", data.token);
          localStorage.setItem("@USERID", data.admin.id);
          reset()
          setAdmin(data.admin);
          notifySuccess();
          setTimeout(() => {
            navigate("/dashboard/home");
          }, 1000);
        } catch (error) {
          notifyError();
        } finally {
          setLoading(false);
        }
      };
      
      const RegisterAdm = async (formData : registerAdmProps) => {
        try {
          const {data} = await api.post("/users", formData);
          console.log(data);
          setLoading(true);
          SucessRegister();
          reset()
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } catch (error) {
          ErroRegister();
        } finally {
          setLoading(false);
        }
    }

    const AdminLogout = () => {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      setAdmin(null);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    
    };
    const ErroRegister = () =>{
            toast.error("Alguma coisa deu errado")
    }
    
    const SucessRegister = () => {
        toast.success("Conta Criado com sucesso");
    };
    
    const notifySuccess = () => {
            toast.success("Conta logada com sucesso");
    };
    
    const notifyError = () => {
            toast.error("Login invalido");
    };

    return(
        <UserContext.Provider value={{loading, admin, LoginAdm, RegisterAdm, AdminLogout}}>
            {children}
        </UserContext.Provider>
    )
};







//funcoes de login e register
//edicao, adicao, exclusao de produtos
//estado do admin
//toastify pra login, register, manipulacao de catalogo
//alvaro e luiz
