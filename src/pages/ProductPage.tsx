import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
import { IProduct } from "../interfaces";
import { Cart } from "../components/Cart";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { DisplayedProduct } from "../components/DisplayedProduct";
import { HighlightSection } from "../components/HighlightSection";

export const ProductPage = ({ product }: { product: IProduct }) => {
  const { selectedProductId, products } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);
    setLoading(true);

    const filteredArray = products.filter((item) => item.id !== product.id);

    setFilteredProducts(filteredArray);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [selectedProductId]);

  return (
    <>
      <Cart>
        <div className="w-5/6 mx-auto min-h-screen py-16 flex flex-col gap-20">
          <main className="mx-auto flex flex-col gap-10 relative">
            <Breadcrumbs product={product} />
            <DisplayedProduct product={product} loading={loading} />
          </main>
          <HighlightSection
            productArray={filteredProducts}
            highlightSectionRef={undefined}
          />
        </div>
      </Cart>
    </>
  );
};
