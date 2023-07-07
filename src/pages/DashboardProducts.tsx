import { AiOutlinePlusCircle } from "react-icons/ai";
import { Logo } from "../components/Logo";
import { DashboardNavbar } from "../components/DashboardNavbar";
import { Footer } from "../components/Footer";
import { DashboardProductCard } from "../components/DashboardProductCard";
import { EditProductModal } from "../components/EditProductModal";
import { AddProductModal } from "../components/AddProductModal";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
import { DeleteProductModal } from "../components/DeleteProductModal";

export const DashboardProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const addModal = useRef<HTMLDialogElement>(null);
  const editModal = useRef<HTMLDialogElement>(null);
  const deleteModal = useRef<HTMLDialogElement>(null);

  const { products } = useContext(ProductContext);

  return (
    <>
      <Logo />
      <main className="w-5/6 mx-auto min-h-screen pb-10">
        <div
          className={`${
            loading ? "translate-y-3" : ""
          } flex flex-col gap-10 transition-all duration-1000`}
        >
          <DashboardNavbar />
          <EditProductModal editModal={editModal} />
          <AddProductModal addModal={addModal} />
          <DeleteProductModal deleteModal={deleteModal} />
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
            {products.map((product) => (
              <DashboardProductCard
                key={product.id}
                productName={product.name}
                productPrice={Number(product.price)}
                productDescription={product.description}
                imgSource={product.image}
                editModal={editModal}
                productId={product.id}
                deleteModal={deleteModal}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};
