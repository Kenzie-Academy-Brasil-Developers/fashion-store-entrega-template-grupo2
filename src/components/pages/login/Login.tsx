import fashion1 from '../../../assets/Rectangle 2.svg'
import { ReactNode } from 'react';
import { FormLogin } from './formLogin/formLogin';

interface ILoginUser {
  children: ReactNode;
}

export const LoginUser = (ILoginUser) =>{
  return (
    <>
      <div className='flex flex-col mx-auto h-screen'>
        <header className='p-10 flex justify-center' >
          <span>FASHIONSTORE</span>
        </header>
        <div className="flex justify-center items-center flex-row w-5/6 mx-auto gap-10">
            <img src={fashion1} className='w-[50%]' />
            <FormLogin/>
        </div>
        <footer className="absolute bottom-0 w-full font-oswald bg-black text-white flex justify-center items-center p-10" >Todos os direitos reservados - Kenzie Academy Brasil</footer>
      </div>
    </>
  );
}
