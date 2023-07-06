import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { FormRegister } from "../validation/RegisterFormValidation/FormRegister";
import { useState, useEffect } from "react";

export const Register = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Logo />
      <main className="w-5/6 mx-auto min-h-screen flex justify-center py-16">
        <div
          className={`${
            loading ? "translate-y-5" : ""
          } flex flex-col justify-center lg:flex-row gap-10 items-center transition-all duration-1000`}
        >
          <div className="rounded-lg lg:w-1/2">
            <img src="https://i.ibb.co/yhFQ899/Rectangle-2-2.png" />
          </div>
          <FormRegister />
        </div>
      </main>
      <Footer />
    </>
  );
};
