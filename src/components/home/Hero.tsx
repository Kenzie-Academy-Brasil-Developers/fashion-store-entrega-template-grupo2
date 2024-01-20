import { RefObject } from "react";

interface IHeroProps {
  loading: boolean;
  highlightSectionRef: RefObject<HTMLElement>;
}

export const Hero = ({ loading, highlightSectionRef }: IHeroProps) => {
  return (
    <div
      className={`${
        loading ? "opacity-0 translate-y-3 select-none" : ""
      } flex flex-col md:flex-row gap-12 items-center transition-all duration-1000`}
    >
      <img
        className="rounded-2xl md:w-2/3 "
        src="https://i.ibb.co/MsgbSm2/Rectangle-2.jpg"
      />
      <div className="flex flex-col items-center gap-16 md:items-start">
        <h1 className="font-medium leading-tight tracking-wide text-center uppercase font-oswald md:text-left text-7xl md:text-6xl lg:text-7xl xl:text-8xl">
          Kenzie Fashion Store
        </h1>
        <button
          onClick={() =>
            highlightSectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            })
          }
          className="rounded-none btn btn-primary btn-lg"
        >
          Confira as ofertas
        </button>
      </div>
    </div>
  );
};
