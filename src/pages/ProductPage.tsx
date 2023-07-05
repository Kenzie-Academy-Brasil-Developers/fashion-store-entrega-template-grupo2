import { BsCartPlus } from "react-icons/bs";
import { HighlightProductCard } from "../components/HighlightProduct";

interface IProductPage {
  imgSource: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

export const ProductPage = ({
  imgSource,
  productName,
  productDescription,
  productPrice,
}: IProductPage) => {
  return (
    <>
      <main className="md:w-full w-screen min-h-screen flex flex-col gap-10 py-16 overflow-hidden">
        <div className="flex gap-3 justify-center text-center uppercase font-oswald text-sm font-medium">
          <a className="link-hover cursor-pointer">Home</a>
          {">"}
          <a className="link-hover cursor-pointer">{productName}</a>
        </div>
        <div className="w-5/6 mx-auto flex flex-col sm:flex-row gap-10 justify-center items-center">
          <div className="overflow-hidden sm:w-[30rem] lg:w-[25rem] sm:h-[35rem] lg:h-[30rem] rounded-2xl">
            <img
              src={imgSource}
              className="object-bottom hover:scale-[105%] transition-all duration-300 object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 sm:w-1/3">
            <h3 className="text-base font-roboto font-semibold">
              {productName}
            </h3>
            <p className="uppercase text-xl font-oswald font-normal">
              {productPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-base font-roboto font-light">
              {productDescription}
            </p>
            <button className="btn btn-primary flex-nowrap uppercase gap-3 mt-3 w-fit font-thin tracking-widest font-oswald items-center flex">
              <BsCartPlus className="text-xl flex-shrink-0" />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div className="md:w-5/6 md:mx-auto flex flex-col gap-10 lg:gap-14 overflow-hidden">
          <h2 className="w-5/6 mx-auto md:w-full font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
            Produtos em destaque
          </h2>
          <ul className="w-[90%] md:w-full ml-auto pr-8 md:pr-0 flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
          </ul>
        </div>
      </main>
    </>
  );
};
