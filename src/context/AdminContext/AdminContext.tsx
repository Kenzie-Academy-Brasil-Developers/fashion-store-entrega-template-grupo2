
//funcoes de login e register
//edicao, adicao, exclusao de produtos
//estado do admin
//toastify pra login, register, manipulacao de catalogo
//alvaro e luiz

import { createContext, useEffect, useState } from "react";

import { IAdminContext, IAdminProviderProps, IProduct } from "./@types";
import { toast } from "react-toastify";
import { api } from "../../services/Api";

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({ children }: IAdminProviderProps) => {
    const [productList, setProductList] = useState<IProduct[]>([]);
    
    useEffect(()=>{
        const loadProducts = async () =>{
            try {
                const {data} = await api.get<IProduct[]>("/products")
                setProductList(data)
                toast.info("Produtos da loja carregados com sucesso");
            } catch (error) {
                toast.error(""+error)
            }
        }
        loadProducts();
    }, [])

    const addProduct = async (formData: IProduct) =>{
        try {
            const body = {name: formData.name, 
                price: formData.price, 
                description: formData.description,
                image: formData.image}
            const{data} = await api.post("/products", body)
            setProductList((productList)=>[...productList, data])
            toast.success(`Produto ${data.name} cadastrado com sucesso`)
        } catch (error) {
            toast.error(""+error)
        }
    }

    const deleteProduct = async (productId:number) =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdmFyb0BtYWlsLmNvbSIsImlhdCI6MTY4ODYxMDMwOCwiZXhwIjoxNjg4NjEzOTA4LCJzdWIiOiIyIn0.qasGsQTeIPtC1CAhI5_f_fcv9CvWtscqmx4EJZJ0eJQ"

        try {
            await api.delete(`/products/${productId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProductList((productList)=>productList.filter(product => product.id !== productId))
            toast.success("Produto deletado com sucesso")
        } catch (error) {
            toast.error(""+error)
        }
    }

    const editProduct = async (formData: IProduct) =>{
        try {
            const body = {name: formData.name, 
                price: formData.price, 
                description: formData.description,
                image: formData.image}
            await api.put(`/products/${formData.id}`, body)
            setProductList((productList)=> productList.map(product=>{
                if(formData.id === product.id){
                    return {...product, ...formData}
                }else{
                    return product;
                }
            }))
            toast.success("Produto atualizado com sucesso")
        } catch (error) {
            toast.error(""+error)
        }
    }

  return(
    <AdminContext.Provider value={{productList, addProduct, deleteProduct, editProduct}}>
        {children}
    </AdminContext.Provider>
  )
};
