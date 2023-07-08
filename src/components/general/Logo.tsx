import { useContext } from "react";
import { GrLogout } from "react-icons/gr";
import { UserContext } from "../../providers/UserContext";

export const Logo = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className="absolute flex justify-end w-full top-0 py-3 bg-base-100 z-10">
      <span className="uppercase absolute top-3 right-1/2 translate-x-1/2 font-oswald font-medium text-sm md:text-lg tracking-wide select-none">
        Fashionstore
      </span>
      <button onClick={userLogout} className="h-fit mr-10">
        <GrLogout className="text-xl xl:text-2xl" />
      </button>
    </nav>
  );
};
