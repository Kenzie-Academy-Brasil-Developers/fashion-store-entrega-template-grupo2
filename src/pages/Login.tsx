import { Link } from "react-router-dom";
import { Footer } from "../components/general/Footer";
import { FormLogin } from "../validation/LoginFormValidation/FormLogin";
import { useEffect, useState } from "react";

export const Login = () => {
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
      <Link
        to="/"
        className="uppercase absolute top-3 right-1/2 translate-x-1/2 font-oswald font-medium text-sm md:text-lg tracking-wide select-none"
      >
        Fashionstore
      </Link>
      <main className="w-5/6 mx-auto min-h-screen flex justify-center py-16">
        <div
          className={`${
            loading ? "translate-y-5" : ""
          } flex flex-col justify-center lg:flex-row gap-10 items-center transition-all duration-1000`}
        >
          <div className="rounded-lg lg:w-1/2 xl:w-2/3">
            <img src="https://i.ibb.co/M1yqphr/Rectangle-2-1.png" />
          </div>
          <FormLogin />
        </div>
      </main>
      <Footer />
    </>
  );
};
