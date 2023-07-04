import React, { useState } from 'react';
import Logo from "../../Assets/FAshionSTORE.svg"
import Retangle from "../../Assets/Rectangle 2.svg"

interface ILogin {
  id: number;
  email: string;
  password: string;
}

export const LoginUser = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    id: 0,
    email: '',
    password: '',
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
      <div className='flex flex-col mx-auto h-screen'>
        <header className='p-10 flex justify-center' >
          <img src={Logo}/>
        </header>
        <div className="flex justify-center items-center flex-row w-5/6 mx-auto gap-10">
            <img src={Retangle} className='w-[50%]' />
            <form className="flex flex-col w-1/3  mr-auto space-y-4" onSubmit={handleSubmit}>
                <h1 className="font-oswald text-6xl uppercase font-semibold leading-90">Entrar</h1>
                <input
                    className="font-oswald input w-full bg-gray-100"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
                <input
                    className="font-oswald input w-full bg-gray-100"
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
                <div className="flex gap-2">
                    <button type="submit" className="btn font-oswald bg-black text-white">Acessar</button>
                    <button className="btn font-oswald">Cadastre-se</button>
                </div>
            </form>
        </div>
        <footer className="absolute bottom-0 w-full font-oswald bg-black text-white flex justify-center items-center p-10" >Todos os direitos reservados - Kenzie Academy Brasil</footer>
      </div>
    </>
  );
};