<<<<<<< Updated upstream
interface ILoadingSpinnerProps {
  loading: boolean;
}

export const LoadingSpinner = ({ loading }: ILoadingSpinnerProps) => {
=======
import { IDisplayedProductProps } from "../interfaces";

export const LoadingSpinner = ({ loading }: IDisplayedProductProps) => {
>>>>>>> Stashed changes
  return (
    <span
      className={`${
        loading ? "" : "opacity-0"
      } absolute bottom-2/3 sm:bottom-1/2 right-1/2 translate-x-1/2 sm:translate-y-1/2 translate-y-2/3 loading loading-spinner loading-lg transition-all`}
    ></span>
  );
};
