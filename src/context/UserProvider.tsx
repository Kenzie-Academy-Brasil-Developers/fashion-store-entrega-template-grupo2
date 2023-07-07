import { useNavigate } from "react-router-dom";
import { api } from "../services/Api";
import { ReactNode, createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface userProviderProps {
  children: ReactNode;
}

export interface registerAdmProps {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface loginAdmProps {
  email: string;
  password: string;
}

interface IUserContext {
  admin: any;
  LoginAdm: (formData: loginAdmProps) => Promise<void>;
  RegisterAdm: (formData: registerAdmProps) => Promise<void>;
  AdminLogout: () => void;
  loading: boolean;
}

interface IAdmin{
  id: number
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: userProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [admin, setAdmin] = useState<IAdmin>();
  const navigate = useNavigate();
  const { reset } = useForm();

  const LoginAdm = async (formData: loginAdmProps) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      reset();
      setAdmin(data.user);
      notifySuccess();
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    } catch (error) {
      console.log(error);
      notifyError();
    } finally {
      setLoading(false);
    }
  };
 

  const RegisterAdm = async (formData: registerAdmProps) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      setLoading(true);
      SucessRegister();
      reset();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      ErroRegister();
    } finally {
      setLoading(false);
    }
  };

  const AdminLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setAdmin(undefined);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  const ErroRegister = () => {
    toast.error("Alguma coisa deu errado");
  };

  const SucessRegister = () => {
    toast.success("Conta Criado com sucesso");
  };

  const notifySuccess = () => {
    toast.success("Conta logada com sucesso");
  };

  const notifyError = () => {
    toast.error("Login invalido");
  };

  return (
    <UserContext.Provider
      value={{ loading, admin, LoginAdm, RegisterAdm, AdminLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

//funcoes de login e register
//edicao, adicao, exclusao de produtos
//estado do admin
//toastify pra login, register, manipulacao de catalogo
//alvaro e luiz
