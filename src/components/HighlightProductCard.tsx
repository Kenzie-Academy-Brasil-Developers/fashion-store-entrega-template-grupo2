import { BsCartPlus } from "react-icons/bs";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
import { LoadingSpinner } from "./LoadingSpinner";
import { IHighlightProductCardProps } from "../interfaces";

export const HighlightProductCard = ({
  imgSource,
  productTitle,
  productPrice,
  productId,
  loading,
}: IHighlightProductCardProps) => {
  const { selectId } = useContext(ProductContext);

  return (
    <li
      id={productId.toString()}
      className="flex flex-col flex-shrink-0 gap-3 sm:gap-5"
    >
      <div
        onClick={selectId}
        className="rounded-3xl shrink-0 w-44 lg:w-60 h-48 sm:h-52 md:h-64 lg:h-72 cursor-pointer overflow-hidden relative"
      >
        <LoadingSpinner loading={loading} />
        <img
          src={imgSource}
          className="w-full h-full hover:scale-[105%] transition-all duration-1000"
        />
      </div>
      <h3
        onClick={selectId}
        className="text-md sm:text-lg font-oswald font-semibold sm:font-semibold tracking-wide link-hover cursor-pointer"
      >
        {productTitle}
      </h3>
      <p className="uppercase font-oswald font-normal">
        {productPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button
        onClick={selectId}
        className="mt-2 w-fit mr-auto flex flex-row gap-5 items-center hover:bg-base-300 transition-all duration-300 pr-4 hover:scale-[105%]"
      >
        <div className="bg-black p-3 sm:p-3">
          <BsCartPlus className="text-lg sm:text-2xl fill-white" />
        </div>
        <p className="uppercase font-oswald text-xs sm:text-sm whitespace-nowrap  font-normal tracking-widest items-center">
          Saiba mais
        </p>
      </button>
    </li>
  );
};
