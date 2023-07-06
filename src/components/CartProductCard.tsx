import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";

interface ICartProductCardProps {
  productTitle: string;
  productPrice: number;
  imgSource: string;
  productQuantity: number;
  productId: number;
}

export const CartProductCard = ({
  productTitle,
  productPrice,
  productQuantity,
  productId,
  imgSource,
}: ICartProductCardProps) => {
  const { selectId, toggleCartModal, removeCartItem } =
    useContext(ProductContext);

  return (
    <li
      id={productId.toString()}
      className="w-full flex flex-row gap-5 flex-nowrap relative"
    >
      <div className="indicator">
        <span className="indicator-item badge text-xs badge-secondary font-roboto rounded-full select-none">
          {productQuantity}
        </span>
        <div
          onClick={(e) => {
            toggleCartModal();
            selectId(e);
          }}
          className="rounded-md overflow-hidden w-16 h-16 cursor-pointer"
        >
          <img src={imgSource} />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1
          onClick={(e) => {
            toggleCartModal();
            selectId(e);
          }}
          className="font-oswald link-hover cursor-pointer"
        >
          {productTitle}
        </h1>
        <p className="font-oswald">
          {productPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button
        onClick={removeCartItem}
        className="font-oswald font-thin text-xl absolute right-4 top-2"
      >
        —
      </button>
    </li>
  );
};
