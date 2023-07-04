import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import {BiArrowBack} from "react-icons/bi"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TRegisterFormValues } from "../SingupSchemaResolver";


export const FormRegister = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm<TRegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
    })
    const onSubmit: SubmitHandler<TRegisterFormValues> = (data) => console.log(data);
    
    return(
        <form
            className="flex flex-col w-1/3  mr-auto space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Link to="/login" className="flex items-center gap-2 font-oswald input w-[110px] outline-none focus:outline-none">
              <BiArrowBack/>
              Voltar
            </Link>
            <h1 className="font-oswald text-6xl uppercase font-semibold leading-90">
              Cadastrar-se
            </h1>
            <h4>Seja bem-vindo, administrador!</h4>
            <input
              className="font-oswald input w-full bg-gray-100"
              type="text"
              placeholder="Nome"
              autoComplete="current-password"
              {...register("name")}
            />
            {errors.name? <p className=" text-error text-sm font-oswald">{errors.name.message}</p> : null}
            <input
              className="font-oswald input w-full bg-gray-100"
              type="email"
              placeholder="E-mail"
              autoComplete="current-password"
              {...register("email")}
            />
            {errors.email? <p className=" text-error text-sm font-oswald">{errors.email.message}</p> : null}
            <input
              className="font-oswald input w-full bg-gray-100"
              type="password"
              placeholder="Senha"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password? <p className=" text-error text-sm font-oswald">{errors.password.message}</p> : null}
            <input
              className="font-oswald input w-full bg-gray-100"
              type="password"
              placeholder="Confirmar Senha"
              autoComplete="current-password"
              {...register("confirm")}
            />
            {errors.confirm? <p className=" text-error text-sm font-oswald">{errors.confirm.message}</p> : null}
            <button type="submit" className="transition-opacity-duration-2000 btn font-oswald w-40 ml-auto bg-black text-white">
              Cadastre-se
            </button>
          </form>
    )
}