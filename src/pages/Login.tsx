import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { FormLogin } from "../components/LoginFormValidation/FormLogin";

export const Login = () => {
  return (
    <>
      <Logo />
      <main className="sm:w-full w-screen min-h-screen overflow-hidden flex justify-center pb-10 md:pb-0">
        <div className="w-2/3 lg:w-5/6 mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="rounded-lg md:w-1/2">
            <img
              src="https://i.ibb.co/M1yqphr/Rectangle-2-1.png"
              className="rounded-lg"
            />
          </div>
          <FormLogin />
        </div>
      </main>
      <Footer />
    </>
  );
};
