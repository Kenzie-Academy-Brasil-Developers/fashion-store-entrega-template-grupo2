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
}: IDashboardProductCard) => {
  const { deleteProduct, setEditingProduct, editingProduct } =
    useContext(ProductContext);

  const editingThisProduct = () => {
    setEditingProduct({
      name: productName,
      price: productPrice,
      image: imgSource,
      description: productDescription,
      id: productId,
    });
    console.log(editingProduct);
    editModal.current?.showModal();
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
          <h2 className="font-roboto font-bold text-[1.1875rem]">
            {productName}
          </h2>
          <span className=" text-lg font-oswald font-normal">
            {productPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <div className="flex gap-10 md:gap-4">
        <button onClick={() => editingThisProduct()}>
          <MdOutlineEdit size="2.25rem" />
        </button>
        <button onClick={() => deleteProduct(productId)}>
          <TfiTrash size="2.25rem" />
        </button>
      </div>
    </li>
  );
};
