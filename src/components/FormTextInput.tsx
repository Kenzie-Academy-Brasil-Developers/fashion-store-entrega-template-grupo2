import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TLoginFormValues } from "../validation/LoginFormValidation/LoginFormResolver";
import { TRegisterFormValues } from "../validation/RegisterFormValidation/RegisterSchemaResolver";

type InputName = "email" | "password" | "name" | "confirm";

interface ILoginFormTextInputProps {
  register: UseFormRegister<TLoginFormValues>;
  errors: FieldErrors<TLoginFormValues>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
}

interface IRegisterFormTextInputProps {
  register: UseFormRegister<TRegisterFormValues>;
  errors: FieldErrors<TRegisterFormValues>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
}

type IFormTextInputProps =
  | ILoginFormTextInputProps
  | IRegisterFormTextInputProps;

export const FormTextInput = ({
  register,
  errors,
  inputName,
  inputType,
  inputPlaceholder,
}: IFormTextInputProps) => {
  const registerWithTypeGuard = register as UseFormRegister<TLoginFormValues> &
    UseFormRegister<TRegisterFormValues>;

  const errorsWithTypeGuard = errors as FieldErrors<TLoginFormValues> &
    FieldErrors<TRegisterFormValues>;

  return (
    <div className="flex flex-col gap-1">
      <input
        className="font-oswald input lg:input-md md:input-lg w-full bg-gray-100 placeholder:uppercase placeholder:text-gray-500"
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...registerWithTypeGuard(inputName)}
      />
      {errorsWithTypeGuard[inputName] ? (
        <p className="text-red-500 text-xs font-roboto">
          {errorsWithTypeGuard[inputName]?.message}
        </p>
      ) : null}
    </div>
  );
};
