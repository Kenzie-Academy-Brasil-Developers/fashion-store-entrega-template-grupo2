import { ProductList } from "./ProductList";
import { IProduct } from "../providers/ProductContext";
import { RefObject } from "react";

interface IHighlightSectionProps {
  productArray: IProduct[];
  highlightSectionRef: RefObject<HTMLElement> | undefined;
}

export const HighlightSection = ({
  productArray,
  highlightSectionRef,
}: IHighlightSectionProps) => {
  return (
    <section
      ref={highlightSectionRef}
      className="w-full flex flex-col gap-10 lg:gap-14 overflow-hidden"
    >
      <h2 className="  font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
        Produtos em destaque
      </h2>
      <ProductList productArray={productArray} />
    </section>
  );
};
