import {
  useState,
  useRef,
  useEffect,
  createContext,
<<<<<<< Updated upstream
  ReactNode,
  Dispatch,
  SetStateAction,
  MouseEvent,
  MutableRefObject,
} from "react";
import { api } from "../services/api";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface IProductContextProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

interface IProductContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  selectId: (e: MouseEvent<HTMLElement>) => void;
  selectedProductId: string | undefined;
  navigate: NavigateFunction;
  setSelectedProductId: Dispatch<SetStateAction<string | undefined>>;
  addToCart: () => void;
  cartProducts: [] | IProduct[];
  cartModal: MutableRefObject<HTMLInputElement>;
  toggleCartModal: () => void;
  removeCartItem: (e: MouseEvent<HTMLElement>) => void;
}
=======
  MouseEvent,
  MutableRefObject,
} from "react";
import { api } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { IProduct, IProductContext, IProductContextProps } from "../interfaces/index"
>>>>>>> Stashed changes

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[] | []>([]);

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
<<<<<<< Updated upstream
    console.log(productId);
=======
>>>>>>> Stashed changes
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
    } else {
      setCartProducts([...cartProducts, { ...selectedProduct, quantity: 1 }]);
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
<<<<<<< Updated upstream
=======
          selectedProduct,
          setSelectedProduct,
>>>>>>> Stashed changes
          navigate,
          setSelectedProductId,
          addToCart,
          cartProducts,
          cartModal: cartModal as MutableRefObject<HTMLInputElement>,
          toggleCartModal,
          removeCartItem,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
