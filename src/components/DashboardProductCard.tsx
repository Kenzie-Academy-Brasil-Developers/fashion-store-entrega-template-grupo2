import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
import { IDashboardProductCard } from "../interfaces";

export const DashboardProductCard = ({
  productName,
  productPrice,
  productDescription,
  imgSource,
  productId,
  editModal,
  deleteModal,
}: IDashboardProductCard) => {
  const { setSelectedProduct } = useContext(ProductContext);

  const setProduct = () => {
    setSelectedProduct({
      name: productName,
      price: productPrice,
      description: productDescription,
      image: imgSource,
      id: productId,
      quantity: undefined,
    });
  };

  return (
    <li className=" flex lg:justify-between  lg:mx-0 gap-10">
      <div className="w-full flex items-center gap-4">
        <img
          src={imgSource}
          alt="Item da loja"
          className="w-20 md:w-fit md:h-32 rounded-xl"
        />
        <div className=" flex flex-col gap-4">
          <h2 className="font-roboto font-bold">{productName}</h2>
          <span className=" text-lg font-oswald font-normal">
            {productPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <div className="flex gap-10 md:gap-4">
        <button
          onClick={() => {
            setProduct();
            editModal.current?.showModal();
          }}
        >
          <MdOutlineEdit size="2.25rem" />
        </button>
        <button
          onClick={() => {
            setProduct();
            deleteModal.current?.showModal();
          }}
        >
          <TfiTrash size="2.25rem" />
        </button>
      </div>
    </li>
  );
};
