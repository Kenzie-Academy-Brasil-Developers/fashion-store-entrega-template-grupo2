import { RefObject } from "react";
import { EditProductForm } from "./EditProductForm";

interface IEditProductModal {
  editModal: RefObject<HTMLDialogElement>;
}

export const EditProductModal = ({ editModal }: IEditProductModal) => {
  return (
    <>
      <dialog
        ref={editModal}
        className="modal w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <div className="modal-box pt-20">
          <button
            onClick={() => {
              editModal.current?.close();
            }}
            className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-oswald font-semibold tracking-wide text-2xl absolute left-6 top-7">
            EDITAR PRODUTO
          </h3>
          <EditProductForm />
        </div>
      </dialog>
    </>
  );
};
