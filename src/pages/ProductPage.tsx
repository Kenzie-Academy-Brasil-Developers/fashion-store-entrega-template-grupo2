import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
import { IProduct } from "../providers/ProductContext";
import { Cart } from "../components/Cart";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { DisplayedProduct } from "../components/DisplayedProduct";
import { HighlightSection } from "../components/HighlightSection";

export const ProductPage = () => {
  const { selectedProductId, products, selectedProduct, navigate } =
    useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);
    if (selectedProduct === undefined) navigate("/");

    const filteredArray = products.filter(
      (product) => product.id.toString() !== selectedProductId
    );
    setFilteredProducts(filteredArray);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [selectedProductId]);

  return (
    <>
      <Cart>
        <div className="w-5/6 mx-auto min-h-screen py-16 flex flex-col gap-20">
          <main className="mx-auto flex flex-col gap-10 relative">
            <Breadcrumbs />
            <DisplayedProduct loading={loading} />
          </main>
          <HighlightSection productArray={filteredProducts} loading={loading} />
        </div>
      </Cart>
    </>
  );
};
