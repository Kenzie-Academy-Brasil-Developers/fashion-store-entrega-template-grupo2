import { AiOutlineShoppingCart } from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <nav className="flex justify-between w-[80%] mx-auto py-8 items-center">
        <h2 className="font-oswald text-lg text- font-black uppercase tracking-wide">
          fashionstore
        </h2>
        <AiOutlineShoppingCart className="text-3xl" />
      </nav>
      <main className="flex flex-col items-center w-auto sm:flex-row sm:w-[80%] justify-between mx-auto py-6">
        <img
          className="w-[70%] rounded-2xl"
          src="https://img.freepik.com/fotos-gratis/jovens-mulheres-felizes-que-verificam-sacos-de-compras_23-2148385689.jpg?size=626&ext=jpg"
        />
        <div className="flex flex-col w-[25%] items-center sm:items-start h-70 px-4 py-6 gap-16">
          <h1 className="font-oswald uppercase font-extrabold text-5xl sm:text-6xl tracking-wide">
            Kenzie Fashion Store
          </h1>
          <button className="btn btn-neutral tracking-widest font-oswald">
            Confira as ofertas
          </button>
        </div>
      </main>
      <div className="w-[80%] mx-auto py-8">
        <h2 className="font-oswald uppercase font-black text-3x1 sm:text-4xl tracking-wide py-8">
          Produtos em destaque
        </h2>
        <div className="overflow-x-auto">
          <ul className="flex flex-row gap-5">
            <li className="flex flex-col w-64 gap-5">
              <img
                src="https://i.shafacdn.net/images/319880-65-auto-auto-ZID8IWrY6_g.jpg"
                className="rounded-3xl"
              />
              <h3 className="font-oswald font-extrabold tracking-wide">
                Sapatos Amarelos
              </h3>
              <p className="uppercase font-oswald font-bold">R$490,00</p>
              <div className="flex flex-row gap-10">
                <AiOutlineShoppingCart className="text-3xl bg-gray-500" />
                <p className="uppercase font-oswald font-bold tracking-widest items-center">
                  Saiba mais
                </p>
              </div>
            </li>
            <li className="flex flex-col w-64 gap-6">
              <img
                src="https://i.shafacdn.net/images/319880-65-auto-auto-ZID8IWrY6_g.jpg"
                className="rounded-3xl"
              />
              <h3 className="font-oswald font-extrabold tracking-wide">
                Sapatos Amarelos
              </h3>
              <p className="uppercase font-oswald font-bold">R$490,00</p>
              <div className="flex flex-row gap-10">
                <AiOutlineShoppingCart className="text-3xl bg-gray-500" />
                <p className="uppercase font-oswald font-bold tracking-widest items-center">
                  Saiba mais
                </p>
              </div>
            </li>
            <li className="flex flex-col w-64 gap-5">
              <img
                src="https://i.shafacdn.net/images/319880-65-auto-auto-ZID8IWrY6_g.jpg"
                className="rounded-3xl"
              />
              <h3 className="font-oswald font-extrabold tracking-wide">
                Sapatos Amarelos
              </h3>
              <p className="uppercase font-oswald font-bold">R$490,00</p>
              <div className="flex flex-row gap-10">
                <AiOutlineShoppingCart className="text-3xl bg-gray-500" />
                <p className="uppercase font-oswald font-bold tracking-widest items-center">
                  Saiba mais
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer className="flex justify-center items-center bg-slate-950 h-20">
        <p className=" font-oswald text-white">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </footer>
    </>
  );
};
