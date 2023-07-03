interface ICartProductCardProps {
  productTitle: string;
  productPrice: number;
  imgSource: string;
}

export const CartProductCard = ({
  productTitle,
  productPrice,
  imgSource,
}: ICartProductCardProps) => {
  return (
    <div className="w-full flex flex-row gap-5 flex-nowrap relative">
      <div className="rounded-md overflow-hidden w-16 h-16 cursor-pointer">
        <img src={imgSource} />
      </div>
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="font-oswald link-hover cursor-pointer">
          {productTitle}
        </h1>
        <p className="font-oswald">
          {productPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button className="font-oswald font-thin text-xl absolute right-4 top-2">
        —
      </button>
    </div>
  );
};
