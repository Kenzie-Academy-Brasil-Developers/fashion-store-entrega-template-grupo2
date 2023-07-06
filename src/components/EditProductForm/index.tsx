import { SubmitHandler, useForm } from "react-hook-form"
import { BiPencil } from "react-icons/bi"
import { TEditProductForm, editProductFormSchema } from "./editProductFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ProductContext } from "../../providers/ProductContext"

export const EditProcutForm = () =>{
    const {editProduct, editingProduct} = useContext(ProductContext)

    const {register, reset, handleSubmit, formState: {errors}} = useForm<TEditProductForm>({
        resolver: zodResolver(editProductFormSchema),
        defaultValues:{
            name: editingProduct?.name,
            price: editingProduct?.price.toString(),
            image: editingProduct?.image,
            description: editingProduct?.description,
        }
    })


    const submit: SubmitHandler<TEditProductForm> = (formData) =>{
        console.log(formData, editingProduct?.id);
        if(editingProduct){
          editProduct(formData, editingProduct.id)
          reset()
        }else{
          console.log("Sem ID")
        }
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              placeholder="Nome"
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
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
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
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
              className="font-oswald input w-full bg-gray-100 uppercase placeholder:text-gray-500"
              {...register("image")}
            />
            {errors.image ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.image.message}
            </p>
          ) : null}
            <textarea
              className="textarea textarea-bordered w-full bg-gray-100 font-oswald placeholder:text-gray-500 uppercase resize-none"
              placeholder="Descrição resumida"
              {...register("description")}
            ></textarea>
             {errors.description ? (
            <p className=" text-red-500 text-xs font-roboto">
              {errors.description.message}
            </p>
          ) : null}
            <button className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest">
              <BiPencil className="text-lg" />
              EDITAR PRODUTO
            </button>
          </form>
    )
}