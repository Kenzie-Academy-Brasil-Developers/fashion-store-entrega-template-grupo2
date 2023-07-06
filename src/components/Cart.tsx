import { ReactNode } from "react";
import { CartProductCard } from "./CartProductCard";
import { Footer } from "./Footer";
import { ShoppingNavbar } from "./ShoppingNavbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface ICartProps {
  children: ReactNode;
}

export const Cart: React.FC<ICartProps> = ({ children }) => {
  const { cartProducts, cartModal, toggleCartModal } = useContext(CartContext);

  return (
    <div className="drawer drawer-end">
      <input ref={cartModal} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <ShoppingNavbar />
        {children}
        <Footer />
      </div>
      <div className="drawer-side z-20">
        <label onClick={toggleCartModal} className="drawer-overlay"></label>
        <ul className=" p-4 pt-20 w-80 h-full bg-base-200 text-base-content flex flex-col gap-8 z-20">
          <label
            onClick={toggleCartModal}
            className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-1"
          >
            ✕
          </label>
          <h1 className="font-oswald font-semibold text-xl absolute left-5 top-5 tracking-wide">
            CARRINHO
          </h1>
          {cartProducts.map((product) => {
            return (
              <CartProductCard
                key={product.id}
                productId={product.id}
                imgSource={product.image}
                productPrice={product.price}
                productTitle={product.name}
                productQuantity={product.quantity}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
