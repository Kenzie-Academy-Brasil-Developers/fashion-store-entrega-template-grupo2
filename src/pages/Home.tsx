import { useContext, useEffect, useState, useRef } from "react";
import { ProductContext } from "../providers/ProductContext";
import { Cart } from "../components/cart/Cart";
import { HighlightSection } from "../components/general/HighlightSection";
import { Hero } from "../components/home/Hero";

export const Home = () => {
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
