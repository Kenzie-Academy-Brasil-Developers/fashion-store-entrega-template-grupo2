import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
import { BsCartPlus } from "react-icons/bs";
import { LoadingSpinner } from "./LoadingSpinner";

interface IDisplayedProductProps {
  loading: boolean;
}

export const DisplayedProduct = ({ loading }: IDisplayedProductProps) => {
  const { selectedProduct, addToCart } = useContext(ProductContext);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
        <LoadingSpinner loading={loading} />
        <div
          className={`${
            loading ? "opacity-0 translate-y-3 select-none" : ""
          } bg-base-200 overflow-hidden rounded-3xl max-h-[30rem] lg:h-[30rem] max-w-[24rem] transition-all duration-1000 relative`}
        >
          <img
            src={selectedProduct?.image}
            className="hover:scale-[105%] transition-all duration-300 object-cover w-full h-full"
            alt={selectedProduct?.name}
          />
        </div>
        <div
          className={`${
            loading ? "opacity-0 translate-y-3 select-none" : ""
          } flex flex-col gap-5 md:w-1/3 sm:w-1/2 transition-all duration-1000 relative`}
        >
          <h3 className="text-base font-roboto font-semibold">
            {selectedProduct?.name}
          </h3>
          <p className="uppercase text-xl font-oswald font-normal">
            {selectedProduct?.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="text-base font-roboto font-light">
            {selectedProduct?.description}
          </p>
          <button
            disabled={loading}
            onClick={addToCart}
            className="btn btn-primary flex-nowrap uppercase gap-3 mt-3 w-fit font-thin tracking-widest font-oswald items-center flex"
          >
            <BsCartPlus className="text-xl flex-shrink-0" />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
};
