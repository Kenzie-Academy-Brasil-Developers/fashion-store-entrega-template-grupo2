import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";

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
      <Logo />
      <main className="sm:w-full w-screen min-h-screen overflow-hidden flex justify-center pb-10 md:pb-0">
        <div className="w-2/3 lg:w-5/6 mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="rounded-lg lg:w-1/2">
            <img
              src="https://i.ibb.co/yhFQ899/Rectangle-2-2.png"
              className="rounded-lg"
            />
          </div>
          <form
            className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              className="flex items-center gap-2 font-oswald uppercase tracking-widest"
            >
              <BiArrowBack />
              Voltar
            </button>
            <h1 className="font-oswald text-4xl md:text-6xl uppercase font-semibold leading-90 pb-4">
              Cadastrar-se
            </h1>
            <h4>Seja bem-vindo, administrador!</h4>
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="text"
              placeholder="Nome"
              name="nome"
              value={registerData.nome}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="email"
              placeholder="E-mail"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="password"
              placeholder="Senha"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="password"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="btn btn-primary font-light rounded-none md:w-40 tracking-widest font-oswald ml-auto"
            >
              Cadastrar-se
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
