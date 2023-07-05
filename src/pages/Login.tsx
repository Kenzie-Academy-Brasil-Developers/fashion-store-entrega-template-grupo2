import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";

interface ILogin {
  id: number;
  email: string;
  password: string;
}

export const Login = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    id: 0,
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Logo />
      <main className="sm:w-full w-screen min-h-screen overflow-hidden flex justify-center pb-10 md:pb-0">
        <div className="w-2/3 lg:w-5/6 mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="rounded-lg md:w-1/2">
            <img
              src="https://i.ibb.co/M1yqphr/Rectangle-2-1.png"
              className="rounded-lg"
            />
          </div>
          <form
            className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="font-oswald text-6xl uppercase font-medium leading-90 pb-2">
              Entrar
            </h1>
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="email"
              placeholder="E-mail"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <input
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              type="password"
              placeholder="Senha"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="md:w-40 btn btn-primary rounded-none font-oswald font-normal tracking-widest text-white"
              >
                Acessar
              </button>
              <button className="md:w-40 btn btn-primary rounded-none btn-outline font-normal tracking-widest font-oswald">
                Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
