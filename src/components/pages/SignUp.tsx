import React, { useState } from "react";
import Logo from "../../Assets/FAshionSTORE.svg";
import Retangle02 from "../../Assets/Rectangle 1.svg";
import {BiArrowBack} from "react-icons/bi"

interface IRegister {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const [registerData, setRegisterData] = useState<IRegister>({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário de cadastro
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col mx-auto h-screen select-none">
        <header className="p-10 flex justify-center">
          <img src={Logo} />
        </header>
        <div className="flex justify-center flex-row items-center w-5/6 mx-auto gap-10">
          <img src={Retangle02} className="w-[50%]" />
          <form
            className="flex flex-col w-1/3  mr-auto space-y-4"
            onSubmit={handleSubmit}
          >
            <button type="button" className="flex items-center gap-2 font-oswald input w-[110px] outline-none focus:outline-none">
              <BiArrowBack/>
              Voltar
            </button>
            <h1 className="font-oswald text-6xl uppercase font-semibold leading-90">
              Cadastrar-se
            </h1>
            <h4>Seja bem-vindo, administrador!</h4>
            <input
              className="font-oswald input w-full bg-gray-100"
              type="text"
              placeholder="Nome"
              name="nome"
              value={registerData.nome}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100"
              type="email"
              placeholder="E-mail"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100"
              type="password"
              placeholder="Senha"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100"
              type="password"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button type="submit" className="transition-opacity-duration-2000 btn font-oswald w-40 ml-auto bg-black text-white">
              Cadastre-se
            </button>
          </form>
        </div>
        <footer className="absolute bottom-0 w-full font-oswald bg-black text-white flex justify-center items-center p-10">
          Todos os direitos reservados - Kenzie Academy Brasil
        </footer>
      </div>
    </>
  );
};