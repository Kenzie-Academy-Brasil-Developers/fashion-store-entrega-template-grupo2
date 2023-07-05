import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductsList } from "../ProductsList";

export const ProductPage = () => {
  return (
    <>
      <nav className="flex justify-between w-[80%] mx-auto py-8 items-center">
        <h2 className="font-oswald text-lg text- font-black uppercase tracking-wide">
          fashionstore
        </h2>
        <AiOutlineShoppingCart className="text-3xl" />
      </nav>

      <main>
        <div className="flex w-[80%] mx-auto py-3 items-center justify-center">
          <h4 className="uppercase font-oswald font-bold">
            {"home > Sapato Amarelo"}
          </h4>
        </div>
        <div className="flex w-[70%] mx-auto p-10 items-center">
          <div className="flex w-[50%] items-end">
            <img
              src="https://i.shafacdn.net/images/319880-65-auto-auto-ZID8IWrY6_g.jpg"
              className="h-96 rounded-md w-[80%]"
            />
          </div>
          <div className="flex flex-col gap-10 w-[40%]">
            <h3 className="uppercase text-base font-oswald font-bold">
              Sapato Amarelo
            </h3>
            <p className="uppercase text-lg font-oswald font-bold">R$490,00</p>
            <p className="text-base font-oswald font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              omnis quis qui, magnam ipsum assumenda, ut commodi ratione quidem,
              nam fugiat dolore quo amet pariatur laborum cumque reprehenderit
              non reiciendis.
            </p>
            <button className="btn btn-neutral tracking-widest font-oswald">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div>
          <div className="w-[80%] mx-auto py-8">
            <h2 className="font-oswald uppercase font-black text-3x1 sm:text-4xl tracking-wide py-3">
              Veja também
            </h2>
            <ProductsList />
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center bg-slate-950 h-20">
        <p className=" font-oswald text-white">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </footer>
    </>
  );
};
