import { ProductList } from "./ProductList";
import { IProduct } from "../providers/ProductContext";

interface IHighlightSectionProps {
  productArray: IProduct[];
  loading: boolean;
}

export const HighlightSection = ({
  loading,
  productArray,
}: IHighlightSectionProps) => {
  return (
    <section className="w-full flex flex-col gap-10 lg:gap-14 overflow-hidden">
      <h2 className="  font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
        Produtos em destaque
      </h2>
      <ProductList loading={loading} productArray={productArray} />
    </section>
  );
};
