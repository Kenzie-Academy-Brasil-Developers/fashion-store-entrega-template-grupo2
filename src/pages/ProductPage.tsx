import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
import { IProduct } from "../interfaces";
import { Breadcrumbs } from "../components/productPage/Breadcrumbs";
import { DisplayedProduct } from "../components/productPage/DisplayedProduct";
import { HighlightSection } from "../components/general/HighlightSection";
import { UserContext } from "../providers/UserContext";
import { Cart } from "../components/cart/Cart";

export const ProductPage = ({ product }: { product: IProduct }) => {
  const { loading } = useContext(UserContext);
  const { products } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const filteredArray = products.filter((item) => item.id !== product.id);
    setFilteredProducts(filteredArray);
  }, [product]);

  return (
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
  );
};
