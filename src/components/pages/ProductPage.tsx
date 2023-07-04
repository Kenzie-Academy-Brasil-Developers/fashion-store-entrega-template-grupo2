<<<<<<< HEAD
import { AiOutlineShoppingCart } from "react-icons/ai";

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
            {" "}
            home > Sapato Amarelo
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
            <div className="overflow-x-auto">
              <ul className="flex flex-row gap-5 py-8">
                <li className="flex flex-col w-64 gap-5">
                  <img
                    src="https://http2.mlstatic.com/blazer-feminino-laranja-zara-pronta-entrega-D_NQ_NP_394201-MLB20304127901_052015-F.jpg"
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
                    src="https://http2.mlstatic.com/blazer-feminino-laranja-zara-pronta-entrega-D_NQ_NP_394201-MLB20304127901_052015-F.jpg"
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
=======
import { AiOutlinePlusCircle} from "react-icons/ai"
import { MdOutlineEdit} from "react-icons/md"
import {TfiTrash} from "react-icons/tfi"

export const ProductPage = () =>{
    return (
        <div className="flex flex-col gap-6 w-10/12 mx-auto my-0 font-oswald font-medium">
            <nav className="flex gap-8 text-xl">
                <button className=" font-medium">INÍCIO</button>
                <button className="font-medium">PRODUTOS</button>
            </nav>
            <div className=" flex justify-between items-center">
                <div className=" flex flex-col gap-8">
                    <h1 className=" text-6xl">PRODUTOS</h1>
                    <p className=" font-roboto font-normal text-xl">Gerencie os produtos do catálogo</p>
                </div>
                <button className=" btn-primary h-14 p-6 text-lg flex items-center gap-4"><AiOutlinePlusCircle size="2rem"/> NOVO PRODUTO</button>
            </div>
            <ul className=" list-none py-8 flex flex-wrap gap-16">
                <li className=" w-2/5 flex justify-between">
                    <div className=" flex items-center gap-4">
                        <img src="https://icr.usp.br/wp-content/uploads/2017/12/picture.jpg" 
                        alt="Item da loja"
                        className=" w-[11.25rem] h-[13.125rem] rounded-[1.25rem]"/>
                        <div className=" flex flex-col gap-4">
                            <h2 className="font-roboto text-[1.1875rem] font-bold">Roupa da loja</h2>
                            <span className=" text-lg font-normal">R$ 320,00</span>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <button><MdOutlineEdit size="2.25rem"/></button>
                        <button><TfiTrash size="2.25rem"/></button>
                    </div>
                </li>
                <li className=" w-2/5 flex justify-between">
                    <div className=" flex items-center gap-4">
                        <img src="https://icr.usp.br/wp-content/uploads/2017/12/picture.jpg" 
                        alt="Item da loja"
                        className=" w-[11.25rem] h-[13.125rem] rounded-[1.25rem]"/>
                        <div className=" flex flex-col gap-4">
                            <h2 className="font-roboto text-[1.1875rem] font-bold">Roupa da loja</h2>
                            <span className=" text-lg font-normal">R$ 320,00</span>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <button><MdOutlineEdit size="2.25rem"/></button>
                        <button><TfiTrash size="2.25rem"/></button>
                    </div>
                </li>
                <li className=" w-2/5 flex justify-between">
                    <div className=" flex items-center gap-4">
                        <img src="https://icr.usp.br/wp-content/uploads/2017/12/picture.jpg" 
                        alt="Item da loja"
                        className=" w-[11.25rem] h-[13.125rem] rounded-[1.25rem]"/>
                        <div className=" flex flex-col gap-4">
                            <h2 className="font-roboto text-[1.1875rem] font-bold">Roupa da loja</h2>
                            <span className=" text-lg font-normal">R$ 320,00</span>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <button><MdOutlineEdit size="2.25rem"/></button>
                        <button><TfiTrash size="2.25rem"/></button>
                    </div>
                </li>
                <li className=" w-2/5 flex justify-between">
                    <div className=" flex items-center gap-4">
                        <img src="https://icr.usp.br/wp-content/uploads/2017/12/picture.jpg" 
                        alt="Item da loja"
                        className=" w-[11.25rem] h-[13.125rem] rounded-[1.25rem]"/>
                        <div className=" flex flex-col gap-4">
                            <h2 className="font-roboto text-[1.1875rem] font-bold">Roupa da loja</h2>
                            <span className=" text-lg font-normal">R$ 320,00</span>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <button><MdOutlineEdit size="2.25rem"/></button>
                        <button><TfiTrash size="2.25rem"/></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
>>>>>>> origin/dev-alvaro
