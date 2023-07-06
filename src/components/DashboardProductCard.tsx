import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import { RefObject, useContext } from "react";
import { AdminContext } from "../context/AdminContext/AdminContext";

interface IDashboardProductCard {
  productName: string;
  productPrice: number;
  imgSource: string;
  productId: number;
  editModal: RefObject<HTMLDialogElement>;
}

export const DashboardProductCard = ({
  productName,
  productPrice,
  imgSource,
  productId,
  editModal,
}: IDashboardProductCard) => {
  const {deleteProduct} = useContext(AdminContext)

  return (
    <li className=" flex lg:justify-between  lg:mx-0 gap-10">
      <div className="w-full flex items-center gap-4">
        <img
          src={imgSource}
          alt="Item da loja"
          className="w-20 md:w-fit md:h-32 rounded-xl"
        />
        <div className=" flex flex-col gap-4">
          <h2 className="font-roboto font-bold text-[1.1875rem]">{productName}</h2>
          <span className=" text-lg font-oswald font-normal">{productPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}</span>
        </div>
      </div>
      <div className="flex gap-10 md:gap-4">
        <button onClick={() => editModal.current?.showModal()}>
          <MdOutlineEdit size="2.25rem" />
        </button>
        <button onClick={()=> deleteProduct(productId)}>
          <TfiTrash size="2.25rem" />
        </button>
      </div>
    </li>
  );
};
