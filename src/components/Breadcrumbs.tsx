import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";

export const Breadcrumbs = () => {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div className="flex gap-3 justify-center text-center uppercase font-oswald text-sm font-medium">
      <Link to="/" className="link-hover cursor-pointer">
        Home
      </Link>
      {">"}
      <a className="select-none">{selectedProduct?.name}</a>
    </div>
  );
};
