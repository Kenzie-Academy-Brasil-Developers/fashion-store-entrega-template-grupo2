import {
  ReactNode,
  Dispatch,
  SetStateAction,
  MouseEvent,
  MutableRefObject,
  RefObject,
} from "react";
import { NavigateFunction } from "react-router-dom";

export interface IProductContextProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

export interface IProductContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  selectId: (e: MouseEvent<HTMLElement>) => void;
  selectedProduct: IProduct | undefined;
  setSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>;
  selectedProductId: string | undefined;
  navigate: NavigateFunction;
  setSelectedProductId: Dispatch<SetStateAction<string | undefined>>;
  addToCart: () => void;
  cartProducts: [] | IProduct[];
  cartModal: MutableRefObject<HTMLInputElement>;
  toggleCartModal: () => void;
  removeCartItem: (e: MouseEvent<HTMLElement>) => void;
}

export interface IProductListProps {
  productArray: IProduct[];
  loading: boolean;
}

export interface IAddProductModal {
  addModal: RefObject<HTMLDialogElement>;
}

export interface IDisplayedProductProps {
  loading: boolean;
  product: IProduct;
}

export interface IEditProductModal {
  editModal: RefObject<HTMLDialogElement>;
}

export interface IHighlightProductCardProps {
  imgSource: string;
  productTitle: string;
  productPrice: number;
  productId: number;
  loading: boolean;
}

export interface ILoadingSpinnerProps {
  loading: boolean;
}
