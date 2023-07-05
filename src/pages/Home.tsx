import { HighlightProductCard } from "../components/HighlightProduct";

export const Home = () => {
  return (
    <>
      <main className="md:w-full w-screen min-h-screen flex flex-col gap-10 py-16 overflow-hidden">
        <div className="w-5/6 flex flex-col lg:flex-row gap-14 mx-auto lg:relative">
          <img
            className="w-full lg:w-[60%] rounded-2xl"
            src="https://i.ibb.co/wwXBrt7/Rectangle-2.png"
          />
          <div className="w-2/3 lg:w-full mx-auto lg:items-start flex flex-col items-center gap-14 lg:gap-0">
            <h1 className="leading-tight lg:text-left font-oswald uppercase text-center font-medium text-7xl md:text-6xl lg:text-7xl tracking-wide lg:absolute lg:top-[10%] xl:top-[15%]">
              Kenzie Fashion Store
            </h1>
            <button className="btn btn-primary lg:text-lg text-2xl lg:w-fit font-thin px-6 h-fit lg:h-auto tracking-widest font-oswald w-full md:w-fit rounded-none lg:absolute lg:bottom-[10%] xl:bottom-[15%]">
              Confira as ofertas
            </button>
          </div>
        </div>
        <div className="md:w-5/6 md:mx-auto flex flex-col gap-10 lg:gap-14 overflow-hidden">
          <h2 className="w-5/6 mx-auto md:w-full font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
            Produtos em destaque
          </h2>
          <ul className="w-[90%] md:w-full ml-auto pr-8 md:pr-0 flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
            <HighlightProductCard
              productPrice={500}
              productTitle="Jaqueta Preta"
              imgSource="https://as1.ftcdn.net/v2/jpg/02/44/18/40/1000_F_244184094_9pHXMx8nxpBvPz0Q6dvT8xGUzFXkSNvS.jpg"
            />
          </ul>
        </div>
      </main>
    </>
  );
};
