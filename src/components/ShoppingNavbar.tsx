import { AiOutlineShoppingCart } from "react-icons/ai";

export const ShoppingNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-base-100 z-10">
      <div className="w-5/6 mx-auto flex justify-between py-2 sm:py-4 items-center">
        <h2 className="font-oswald text-lg font-medium uppercase tracking-wide select-none">
          fashionstore
        </h2>
        <label
          htmlFor="my-drawer-4"
          className="cursor-pointer flex items-center"
        >
          <AiOutlineShoppingCart className="text-3xl" />
        </label>
      </div>
    </nav>
  );
};
