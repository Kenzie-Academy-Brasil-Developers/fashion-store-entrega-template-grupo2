import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormSchema,
  TRegisterFormValues,
} from "./RegisterSchemaResolver";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit: SubmitHandler<TRegisterFormValues> = (data) =>
    console.log(data);

  return (
    <>
      <form
        className="w-full lg:max-w-sm flex flex-col gap-5 mr-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link
          to="/login"
          className="flex items-center gap-2 font-oswald uppercase tracking-widest"
        >
          <BiArrowBack />
          Voltar
        </Link>
        <h1 className="font-oswald text-4xl md:text-6xl uppercase font-semibold leading-90 pb-4">
          Cadastrar-se
        </h1>
        <h4>Seja bem-vindo, administrador!</h4>

        <div className="flex flex-col gap-1">
          <input
            className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
            type="text"
            placeholder="Nome"
            autoComplete="current-password"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-red-500 font-roboto">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
            type="email"
            placeholder="E-mail"
            autoComplete="current-password"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-500 font-roboto">
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
            <p className="text-xs text-red-500 font-roboto">
              {errors.password.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
            type="password"
            placeholder="Confirmar Senha"
            autoComplete="current-password"
            {...register("confirm")}
          />
          {errors.confirm ? (
            <p className="text-xs text-red-500 font-roboto">
              {errors.confirm.message}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn btn-primary font-light rounded-none md:w-40 tracking-widest font-oswald ml-auto"
        >
          Cadastrar-se
        </button>
      </form>
    </>
  );
};
