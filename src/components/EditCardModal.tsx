import { useRef } from "react";
import { BiPencil } from "react-icons/bi";

export const EditProductModal = () => {
  const modal = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        onClick={() => modal.current?.showModal()}
        className="btn btn-sm btn-primary w-fit self-end rounded-none text-xs font-oswald font-thin px-8 h-10 tracking-widest"
      >
        <BiPencil className="text-lg" />
        EDITAR PRODUTO
      </button>
      <dialog
        ref={modal}
        className="modal w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <form method="dialog" className="modal-box pt-20">
          <button className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-oswald font-semibold tracking-wide text-2xl absolute left-6 top-7">
            EDITAR PRODUTO
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
              <BiPencil className="text-lg" />
              EDITAR PRODUTO
            </button>
          </form>
        </form>
      </dialog>
    </>
  );
};
