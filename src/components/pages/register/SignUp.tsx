import { FormRegister } from "./formRegister/formRegister";
import { ReactNode } from 'react';
import fashion2 from '../../../assets/Rectangle 1.svg'

interface IRegisterUser {
  children: ReactNode;
}

export const RegisterUser = () =>{
  return (
    <>
      <div className="flex flex-col mx-auto h-screen select-none">
        <header className="p-10 flex justify-center">
          <span>FASHIONSTORE</span>
        </header>
        <div className="flex justify-center flex-row items-center w-5/6 mx-auto gap-10">
          <img src={fashion2} className="w-[50%]" />
          <FormRegister/>
        </div>
        <footer className="absolute bottom-0 w-full font-oswald bg-black text-white flex justify-center items-center p-10">
          Todos os direitos reservados - Kenzie Academy Brasil
        </footer>
      </div>
    </>
  );
};