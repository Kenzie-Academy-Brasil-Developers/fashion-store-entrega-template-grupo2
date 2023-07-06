import { Link } from "react-router-dom";

export const DashboardNavbar = () => {
  return (
    <nav className="flex gap-8 text-xl pt-16">
      <Link
        to="/dashboard/home"
        className="font-oswald font-normal link-hover cursor-pointer uppercase"
      >
        Início
      </Link>
      <Link
        to="/dashboard/products"
        className="font-oswald font-normal link-hover cursor-pointer uppercase"
      >
        Produtos
      </Link>
    </nav>
  );
};
