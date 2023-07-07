import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <nav className="absolute flex justify-center w-full top-0 py-3 bg-base-100 z-10">
      <Link
        to="/"
        className="uppercase font-oswald font-medium text-sm md:text-lg tracking-wide select-none"
      >
        Fashionstore
      </Link>
    </nav>
  );
};