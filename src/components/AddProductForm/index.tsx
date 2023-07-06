import { SubmitHandler, useForm } from "react-hook-form"
import { BsPlusCircle } from "react-icons/bs"
import { TAddProductForm, addProductFormSchema } from "./addProductFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ProductContext } from "../../providers/ProductContext"

export const AddProductForm = () =>{
    const {register, reset , handleSubmit, formState: {errors}} = useForm<TAddProductForm>({
        resolver: zodResolver(addProductFormSchema)
    })

    const {addProduct} = useContext(ProductContext)

    const submit: SubmitHandler<TAddProductForm> = (formData) =>{
        addProduct(formData)
        reset();
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
              {...register("name")}
            />
            {errors.name ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.name.message}
            </p>
          ) : null}
            <input
              type="text"
              placeholder="Preço (R$)"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
              {...register("price")}
            />
            {errors.price ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.price.message}
            </p>
          ) : null}
            <input
              type="text"
              placeholder="Imagem (URL)"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
              {...register("image")}
            />
            {errors.image ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.image.message}
            </p>
          ) : null}
            <textarea
              className="textarea textarea-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase resize-none"
              placeholder="Descrição resumida"
              {...register("description")}
            ></textarea>
            {errors.description ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.description.message}
            </p>
          ) : null}
            <button className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest">
              <BsPlusCircle className="text-lg" />
              NOVO PRODUTO
            </button>
          </form>
    )
}