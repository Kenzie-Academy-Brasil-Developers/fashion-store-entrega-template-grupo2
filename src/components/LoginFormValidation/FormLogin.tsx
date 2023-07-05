import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginFormSchema, TLoginFormValues } from "./LoginFormResolver";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit: SubmitHandler<TLoginFormValues> = (data) => console.log(data);

  return (
    <>
      <form
        className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-oswald text-6xl uppercase font-medium leading-90 pb-2">
          Entrar
        </h1>
        <div className="flex flex-col gap-1">
          <input
            className="font-oswald input w-full bg-gray-100 placeholder:uppercase placeholder:text-gray-500"
            type="text"
            placeholder="Email"
            autoComplete="current-password"
            {...register("email")}
          />
          {errors.email ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.password.message}
            </p>
          ) : null}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="md:w-40 btn btn-primary rounded-none font-oswald font-normal tracking-widest text-white"
          >
            Acessar
          </button>
          <Link
            to="/register"
            className="md:w-40 btn btn-primary rounded-none btn-outline font-normal tracking-widest font-oswald"
          >
            Cadastre-se
          </Link>
        </div>
      </form>
    </>
  );
};
