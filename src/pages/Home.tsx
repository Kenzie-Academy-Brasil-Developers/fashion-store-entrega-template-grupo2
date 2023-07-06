import { HighlightProductCard } from "../components/HighlightProductCard";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Cart } from "../components/Cart";

export const Home = () => {
  const { products, setSelectedProductId } = useContext(CartContext);

  useEffect(() => {
    setSelectedProductId(undefined);
  }, []);

  return (
    <>
      <Cart>
        <main className="w-full mx-auto min-h-screen flex flex-col gap-10 py-16 overflow-hidden">
          <div className="w-5/6 flex flex-col lg:flex-row gap-14 mx-auto lg:relative">
            <img
              className="lg:w-[65%] rounded-2xl"
              src="https://i.ibb.co/wwXBrt7/Rectangle-2.png"
            />
            <div className="w-2/3 lg:w-full mx-auto lg:items-start flex flex-col items-center gap-14 lg:gap-0">
              <h1 className="leading-loose lg:text-left font-oswald uppercase text-center font-medium text-7xl sm:text-6xl lg:text-8xl tracking-wide lg:absolute lg:top-[10%] xl:top-[15%]">
                Kenzie Fashion Store
              </h1>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="btn btn-primary lg:text-lg text-2xl lg:w-fit font-thin px-6 h-fit lg:h-auto tracking-widest font-oswald w-full sm:w-fit rounded-none lg:absolute lg:bottom-[10%] xl:bottom-[15%]"
              >
                Confira as ofertas
              </button>
            </div>
          </div>
          <div className="sm:w-[82vw] w-[95vw] sm:mx-auto flex flex-col gap-10 lg:gap-14 overflow-hidden">
            <h2 className="w-5/6 mx-auto sm:w-full font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
              Produtos em destaque
            </h2>
            <ul className="w-[93%] sm:w-full pr-6 sm:pr-0 ml-auto flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
              {products.map((product) => {
                return (
                  <HighlightProductCard
                    key={product.id}
                    productId={product.id}
                    imgSource={product.image}
                    productPrice={product.price}
                    productTitle={product.name}
                  />
                );
              })}
            </ul>
          </div>
        </main>
      </Cart>
    </>
  );
};
