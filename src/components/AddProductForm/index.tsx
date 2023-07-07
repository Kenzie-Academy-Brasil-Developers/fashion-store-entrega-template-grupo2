import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { TAddProductForm, addProductFormSchema } from "./addProductFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { FormTextInput } from "../FormTextInput";
import { FormTextareaInput } from "../FormTextareaInput";

export const AddProductForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddProductForm>({
    resolver: zodResolver(addProductFormSchema),
  });

  const { addProduct } = useContext(ProductContext);

  const submit: SubmitHandler<TAddProductForm> = (formData) => {
    addProduct(formData);
    reset();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        errors={errors}
        inputName="name"
        inputPlaceholder="Nome"
        inputType="text"
        register={register}
      />
      <FormTextInput
        errors={errors}
        inputName="price"
        inputPlaceholder="Preço (R$)"
        inputType="text"
        register={register}
      />
      <FormTextInput
        errors={errors}
        inputName="image"
        inputPlaceholder="Imagem (URL)"
        inputType="text"
        register={register}
      />
      <FormTextareaInput
        errors={errors}
        inputName="description"
        inputPlaceholder="Imagem (URL)"
        register={register}
      />
      <button className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest">
        <BsPlusCircle className="text-lg" />
        NOVO PRODUTO
      </button>
    </form>
  );
};
