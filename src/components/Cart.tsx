import { ReactNode } from "react";
import { CartProductCard } from "./CartProductCard";
import { Footer } from "./Footer";
import { ShoppingNavbar } from "./ShoppingNavbar";

interface ICartProps {
  children: ReactNode;
}

export const Cart: React.FC<ICartProps> = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <ShoppingNavbar />
        {children}
        <Footer absolute={false} />
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 pt-20 w-80 h-full bg-base-200 text-base-content flex flex-col gap-8 z-20">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-1"
          >
            ✕
          </label>
          <h1 className="font-oswald font-semibold text-xl absolute left-5 top-5 tracking-wide">
            CARRINHO
          </h1>
          <CartProductCard
            imgSource="https://i.pinimg.com/originals/63/b7/73/63b773d207b43ad3f06598cc0254712c.jpg"
            productPrice={320}
            productTitle="Casaco Branco Elegante"
          />
          <CartProductCard
            imgSource="https://media.istockphoto.com/id/1349639302/photo/yellow-female-high-heel-shoes-isolated-on-white.jpg?s=612x612&w=0&k=20&c=el0N2KwHvpgoF91LqzFvbeob9bDWX8g8LO7hwqJChp4="
            productPrice={490}
            productTitle="Sapatos Amarelos"
          />
        </ul>
      </div>
    </div>
  );
};
