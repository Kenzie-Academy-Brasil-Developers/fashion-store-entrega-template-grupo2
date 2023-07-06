import { AiOutlinePlusCircle } from "react-icons/ai";
import { Logo } from "../components/Logo";
import { DashboardNavbar } from "../components/DashboardNavbar";
import { Footer } from "../components/Footer";
import { DashboardProductCard } from "../components/DashboardProductCard";
import { EditProductModal } from "../components/EditProductModal";
import { AddProductModal } from "../components/AddProductModal";
import { useContext, useRef } from "react";
import { AdminContext } from "../context/AdminContext/AdminContext";

export const DashboardProducts = () => {
  const addModal = useRef<HTMLDialogElement>(null);
  const editModal = useRef<HTMLDialogElement>(null);

  const {productList} = useContext(AdminContext)

  return (
    <>
      <main className="lg:w-full w-screen min-h-screen pb-10 md:pb-0">
        <Logo />
        <div className="flex flex-col gap-10 w-5/6 mx-auto">
          <DashboardNavbar />
          <EditProductModal editModal={editModal} />
          <AddProductModal addModal={addModal} />
          <div className="flex gap-10 md:items-center">
            <div className=" flex flex-col gap-8">
              <h1 className="font-oswald text-4xl md:text-6xl font-medium">
                PRODUTOS
              </h1>
              <p className="font-roboto font-normal text-xl">
                Gerencie os produtos do catálogo
              </p>
            </div>
            <button
              onClick={() => addModal.current?.showModal()}
              className="ml-auto cursor-pointer btn btn-primary h-fit md:h-14 p-2 md:rounded-none text-lg flex items-center gap-4"
            >
              <AiOutlinePlusCircle size="2rem" />{" "}
              <span className="hidden md:block font-oswald font-light tracking-widest">
                NOVO PRODUTO
              </span>
            </button>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 w-full list-none">
            {
              productList.map(product=>(
                <DashboardProductCard
                  key={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  imgSource={product.image}
                  editModal={editModal}
                  productId={product.id}
                />
              ))
            }
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};
