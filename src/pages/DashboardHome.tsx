import { DashboardNavbar } from "../components/dashboard/DashboardNavbar";
import { Footer } from "../components/general/Footer";
import { Logo } from "../components/general/Logo";
import { useEffect, useState } from "react";

export const DashboardHome = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Logo />
      <main className="w-5/6 mx-auto min-h-screen pb-10">
        <div
          className={`${
            loading ? "translate-y-3" : ""
          } flex flex-col gap-10 transition-all duration-1000`}
        >
          <DashboardNavbar />
          <h1 className="text-4xl md:text-6xl font-medium font-oswald">
            PAINEL DO ADMINISTRADOR
          </h1>
          <p className=" text-xl font-roboto font-normal">
            Seja bem-vindo, administrador!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
