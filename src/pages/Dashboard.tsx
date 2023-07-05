import { DashboardNavbar } from "../components/DashboardNavbar";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";

export const Dashboard = () => {
  return (
    <>
      <main className="lg:w-full w-screen min-h-screen overflow-hidden pb-10 md:pb-0">
        <Logo />
        <div className="flex flex-col gap-10 w-5/6 mx-auto">
          <DashboardNavbar />
          <h1 className="text-4xl md:text-6xl font-medium font-oswald">
            PAINEL DO ADMINISTRADOR
          </h1>
          <p className=" text-xl font-roboto font-normal">
            Seja bem vindo, administrador!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
