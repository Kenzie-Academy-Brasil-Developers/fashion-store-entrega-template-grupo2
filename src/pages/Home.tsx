import { useContext, useEffect, useState, useRef } from "react";
import { ProductContext } from "../providers/ProductContext";
import { Cart } from "../components/Cart";
import { HighlightSection } from "../components/HighlightSection";
import { Hero } from "../components/Hero";

export const Home = () => {
  const { products, setSelectedProductId } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSelectedProductId(undefined);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const highlightSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <Cart>
        <main className="w-5/6 mx-auto min-h-screen py-20 flex flex-col gap-20">
          <Hero loading={loading} highlightSectionRef={highlightSectionRef} />
          <HighlightSection
            highlightSectionRef={highlightSectionRef}
            productArray={products}
          />
        </main>
      </Cart>
    </>
  );
};
