import {
  useState,
  useRef,
  useEffect,
  createContext,
  ReactNode,
  MouseEvent,
  MutableRefObject,
} from "react";
import { api } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TAddProductForm } from "../components/AddProductForm/addProductFormSchema";
import { TEditProductForm } from "../components/EditProductForm/editProductFormSchema";
import { IProduct, IProductContext } from "../interfaces";

interface IProductContextProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[] | []>([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdmFyb0BtYWlsLmNvbSIsImlhdCI6MTY4ODY2NjQwNCwiZXhwIjoxNjg4NjcwMDA0LCJzdWIiOiIyIn0.7cG5pCWJrKj2dnyieUtdEw4iLGy4k_UZQdUyk0veMD0";

  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  // Função para salvar os produtos do carrinho no localStorage
  const saveCartProductsToLocalStorage = (cartProducts: IProduct[]) => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  };

  // Carrega os produtos do carrinho do localStorage quando o componente for montado
  useEffect(() => {
    const savedCartProducts = localStorage.getItem("cartProducts");
    if (savedCartProducts) {
      setCartProducts(JSON.parse(savedCartProducts));
      console.log(savedCartProducts);
    }
  }, []);

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

  const editProduct = async (formData: TEditProductForm, productId: number) => {
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

  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >("");
  const [selectedProduct, setSelectedProduct] = useState<
    IProduct | undefined
  >();

  //usecallback
  const cartModal = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const selectId = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const productId = target.closest("li")?.id;
    setSelectedProductId(productId);
  };
  const removeCartItem = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const productId = target.closest("li")?.id;
    const dupe = cartProducts.find(
      (product) => product.id.toString() === productId
    );
    if (dupe) {
      const updatedArray = cartProducts.filter(
        (product) => product.id.toString() !== productId
      );
      setCartProducts(updatedArray);
      saveCartProductsToLocalStorage(updatedArray);
    }
  };
  const addToCart = () => {
    if (selectedProduct === undefined) return;
    const dupe = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );
    if (dupe) {
      const updatedDupe = { ...dupe, quantity: (dupe.quantity || 0) + 1 };
      const updatedArray = cartProducts.map((product) =>
        product.id === selectedProduct.id ? updatedDupe : product
      );
      setCartProducts(updatedArray);
      saveCartProductsToLocalStorage(updatedArray);
      console.log("oi");
    } else {
      setCartProducts([...cartProducts, { ...selectedProduct, quantity: 1 }]);
      saveCartProductsToLocalStorage([
        ...cartProducts,
        { ...selectedProduct, quantity: 1 },
      ]);
    }
  };
  const toggleCartModal = () => {
    if (cartModal.current === null) return;
    cartModal.current.checked = !cartModal.current.checked;
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

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const filteredProduct = products.filter(
      (product) => product.id.toString() === selectedProductId
    );
    setSelectedProduct(filteredProduct[0]);
  }, [selectedProductId]);

  useEffect(() => {
    if (selectedProduct === undefined) return;
    navigate(`/product/${selectedProduct?.id}`);
  }, [selectedProduct]);

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          selectId,
          selectedProductId,
          navigate,
          setSelectedProductId,
          addToCart,
          cartProducts,
          cartModal: cartModal as MutableRefObject<HTMLInputElement>,
          toggleCartModal,
          removeCartItem,
          addProduct,
          editProduct,
          deleteProduct,
          editingProduct,
          setEditingProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
