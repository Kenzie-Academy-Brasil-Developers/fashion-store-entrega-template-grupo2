import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema, TLoginFormValues } from "../loginFormResolver";


export const FormLogin = () =>{
    const {register, handleSubmit, formState: { errors }} = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema),
    })
    const onSubmit: SubmitHandler<TLoginFormValues> = (data) => console.log(data);
     
    return(
        <form className="flex flex-col w-1/3  mr-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-oswald text-6xl uppercase font-semibold leading-90">Entrar</h1>
            <input
                className="font-oswald input w-full bg-gray-100"
                type="email"
                placeholder="E-mail"
                autoComplete="current-password"
                {...register("email")}
            />
            {errors.email ? <p className=" text-error text-sm font-oswald">{errors.email.message}</p> : null}
            <input
                className="font-oswald input w-full bg-gray-100"
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                {...register("password")}
            />
            {errors.password? <p className=" text-error text-sm font-oswald">{errors.password.message}</p> : null}
            <div className="flex gap-2">
                <button type="submit" className="btn font-oswald bg-black text-white">Acessar</button>
                <Link to="/register" className="btn font-oswald">Cadastre-se</Link>
            </div>
        </form>
    )
}