import { RefObject } from "react";
import { BsPlusCircle } from "react-icons/bs";

interface IAddProductModal {
  addModal: RefObject<HTMLDialogElement>;
}

export const AddProductModal = ({ addModal }: IAddProductModal) => {
  return (
    <>
      <dialog
        ref={addModal}
        className="modal w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <form method="dialog" className="modal-box pt-20">
          <button className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-oswald font-semibold tracking-wide text-2xl absolute left-6 top-7">
            NOVO PRODUTO
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
            />
            <input
              type="text"
              placeholder="Preço (R$)"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
            />
            <input
              type="text"
              placeholder="Imagem (URL)"
              className="input input-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase"
            />
            <textarea
              className="textarea textarea-bordered w-full bg-base-300 font-oswald placeholder:text-gray-500 uppercase resize-none"
              placeholder="Descrição resumida"
            ></textarea>
            <button className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest">
              <BsPlusCircle className="text-lg" />
              NOVO PRODUTO
            </button>
          </form>
        </form>
      </dialog>
    </>
  );
};
