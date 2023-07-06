import { BsCartPlus } from "react-icons/bs";

interface IHighlightProductCardProps {
  imgSource: string;
  productTitle: string;
  productPrice: number;
}

export const HighlightProductCard = ({
  imgSource,
  productTitle,
  productPrice,
}: IHighlightProductCardProps) => {
  return (
    <li className="flex flex-col flex-shrink-0 gap-3 sm:gap-5">
      <div className="rounded-3xl shrink-0 w-44 lg:w-60 cursor-pointer overflow-hidden">
        <img
          src={imgSource}
          className="text-lg sm:text-xl hover:scale-[105%] transition-all duration-300"
        />
      </div>
      <h3 className="text-md sm:text-lg font-oswald font-semibold sm:font-semibold tracking-wide link-hover cursor-pointer">
        {productTitle}
      </h3>
      <p className="uppercase font-oswald font-normal">
        {productPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button className="mt-2 w-fit mr-auto flex flex-row gap-5 items-center hover:bg-base-300 transition-all duration-300 pr-4 hover:scale-[105%]">
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
