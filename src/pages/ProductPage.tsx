import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
<<<<<<< Updated upstream
import { IProduct } from "../providers/ProductContext";
=======
import { IProduct } from "../providers/@types";
>>>>>>> Stashed changes
import { Cart } from "../components/Cart";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { DisplayedProduct } from "../components/DisplayedProduct";
import { HighlightSection } from "../components/HighlightSection";

<<<<<<< Updated upstream
export const ProductPage = ({ product }: { product: IProduct }) => {
  const { selectedProductId, products } = useContext(ProductContext);
=======
export const ProductPage = () => {
  const { selectedProductId, products, selectedProduct, navigate } =
    useContext(ProductContext);
>>>>>>> Stashed changes

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);
<<<<<<< Updated upstream
    setLoading(true);

    const filteredArray = products.filter((item) => item.id !== product.id);
=======
    if (selectedProduct === undefined) navigate("/");

    const filteredArray = products.filter(
      (product) => product.id.toString() !== selectedProductId
    );
>>>>>>> Stashed changes
    setFilteredProducts(filteredArray);

    const timeout = setTimeout(() => {
      setLoading(false);
<<<<<<< Updated upstream
    }, 300);
=======
    }, 2000);
>>>>>>> Stashed changes
    return () => clearTimeout(timeout);
  }, [selectedProductId]);

  return (
    <>
      <Cart>
        <div className="w-5/6 mx-auto min-h-screen py-16 flex flex-col gap-20">
          <main className="mx-auto flex flex-col gap-10 relative">
<<<<<<< Updated upstream
            <Breadcrumbs product={product} />
            <DisplayedProduct product={product} loading={loading} />
          </main>
          <HighlightSection
            productArray={filteredProducts}
            highlightSectionRef={undefined}
          />
=======
            <Breadcrumbs />
            <DisplayedProduct loading={loading} />
          </main>
          <HighlightSection productArray={filteredProducts} loading={loading} />
>>>>>>> Stashed changes
        </div>
      </Cart>
    </>
  );
};
