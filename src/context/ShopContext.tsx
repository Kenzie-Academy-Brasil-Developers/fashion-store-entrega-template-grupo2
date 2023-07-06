//produtos retirados da api
//estado da product page
//filtro de produtos em destaque na product page
//produtos em destaque
//virgynia
import { api } from "../Services/Api";
import React, { createContext, useState, useEffect } from "react";

interface IProductsProviderProps {
  children: React.ReactNode;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

//interface para descrever o que está escrito em value
interface IProductsContext {
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const ProductsContext = createContext({} as IProductsContext);

//props children tem que ser tipada: reactNode
export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  //addProduct + interface (Alvaro)

  // deleteProduct + interface (Alvaro)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProductsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList, setProductsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
