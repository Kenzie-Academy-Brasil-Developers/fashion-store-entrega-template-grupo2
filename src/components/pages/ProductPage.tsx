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