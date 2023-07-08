import { Link } from "react-router-dom";
import { Footer } from "../components/general/Footer";
import { FormRegister } from "../validation/RegisterFormValidation/FormRegister";
import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
import { Logo } from "../components/general/Logo";

export const Register = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <main className="w-5/6 mx-auto min-h-screen flex justify-center py-16">
        <div
          className={`${
            loading ? "translate-y-5" : ""
          } flex flex-col justify-center lg:flex-row gap-10 items-center transition-all duration-1000`}
        >
          <div className="rounded-lg lg:w-1/2 xl:w-2/3">
            <img src="https://i.ibb.co/yhFQ899/Rectangle-2-2.png" />
          </div>
          <FormRegister />
        </div>
      </main>
      <Footer />
    </>
  );
};
