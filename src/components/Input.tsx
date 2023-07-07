// interface ITextInputProps {
//   type: string;
//   placeholder: string;
//   register: useForm<TRegisterFormValues>;
// }

//COMPONENTE INCOMPLETO, NÃO USAR (só se desenvolver a lógica)
//nao soube tipar a register como prop

export const TextInput = () => {
  return (
    <input
      className="font-oswald input w-full bg-gray-100 placeholder:uppercase placeholder:text-gray-500"
      type="text"
      placeholder="placeholder"
      autoComplete="current-password"
    />
  );
};