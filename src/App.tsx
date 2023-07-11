import { RoutesMain } from "./routes/routesMain";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ProductContext } from "./providers/ProductContext";
import { LoadingScreen } from "./components/general/LoadingScreen";

function App() {
  const { loading } = useContext(ProductContext);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading ? <LoadingScreen /> : <RoutesMain />}
    </>
  );
}
export default App;
