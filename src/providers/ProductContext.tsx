import {
  useState,
  useRef,
  useEffect,
  createContext,
  ReactNode,
  MutableRefObject,
} from "react";
import { api } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TAddProductForm } from "../components/AddProductForm/addProductFormSchema";
import { TEditProductFormValues } from "../components/EditProductForm/editProductFormSchema";
import { IProduct, IProductContext } from "../interfaces";

interface IProductContextProps {
  children: ReactNode;
}

//logica loja/carrinho- marcelino
export const ProductContext = createContext({} as IProductContext);
export const ProductProvider = ({ children }: IProductContextProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[] | []>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    IProduct | undefined
  >();

  //usecallback
  const cartModal = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const removeCartItem = (productId: string) => {
    const dupe = cartProducts.find(
      (product) => product.id.toString() === productId
    );
    if (dupe) {
      const updatedArray = cartProducts.filter(
        (product) => product.id.toString() !== productId
      );
      setCartProducts(updatedArray);
    }
  };
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadProducts();
  }, []);

  const toggleCartModal = () => {
    if (cartModal.current !== null)
      cartModal.current.checked = !cartModal.current.checked;
  };

  //logica manipulacao de items- alvaro
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdmFyb0BtYWlsLmNvbSIsImlhdCI6MTY4ODY2NjQwNCwiZXhwIjoxNjg4NjcwMDA0LCJzdWIiOiIyIn0.7cG5pCWJrKj2dnyieUtdEw4iLGy4k_UZQdUyk0veMD0";

  const addProduct = async (formData: TAddProductForm) => {
    try {
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) => [...products, data]);
      toast.success(`Produto ${data.name} cadastrado com sucesso`);
    } catch (error) {
      toast.error("" + error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      await api.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) =>
        products.filter((product) => product.id !== productId)
      );
      toast.success("Produto deletado com sucesso");
    } catch (error) {
      toast.error("" + error);
    }
  };

  const editProduct = async (
    formData: TEditProductFormValues,
    productId: number
  ) => {
    try {
      await api.put(`/products/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((products) =>
        products.map((product) => {
          if (productId === product.id) {
            const editedProduct = {
              name: formData.name,
              price: Number(formData.price),
              description: formData.description,
              image: formData.image,
              id: productId,
            };
            return { ...product, ...editedProduct };
          } else {
            return product;
          }
        })
      );
      toast.success("Produto atualizado com sucesso");
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          navigate,
          setCartProducts,
          cartProducts,
          cartModal: cartModal as MutableRefObject<HTMLInputElement>,
          removeCartItem,
          addProduct,
          editProduct,
          deleteProduct,
          selectedProduct,
          setSelectedProduct,
          toggleCartModal,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
