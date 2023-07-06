import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../providers/ProductContext";
import { Cart } from "../components/Cart";
import { HighlightSection } from "../components/HighlightSection";

export const Home = () => {
  const { products, setSelectedProductId } = useContext(ProductContext);

  useEffect(() => {
    setSelectedProductId(undefined);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Cart>
        <main className="w-5/6 mx-auto min-h-screen py-20 flex flex-col gap-20">
          <div className="flex gap-12 items-center">
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/wwXBrt7/Rectangle-2.png"
            />
            <div className="flex flex-col gap-16 items-start">
              <h1 className="leading-tight font-oswald uppercase font-medium text-8xl tracking-wide">
                Kenzie Fashion Store
              </h1>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="btn btn-primary lg:text-lg text-2xl lg:w-fit font-thin px-6 h-fit lg:h-auto tracking-widest font-oswald w-full sm:w-fit rounded-none"
              >
                Confira as ofertas
              </button>
            </div>
          </div>
          <HighlightSection loading={loading} productArray={products} />
        </main>
      </Cart>
    </>
  );
};
