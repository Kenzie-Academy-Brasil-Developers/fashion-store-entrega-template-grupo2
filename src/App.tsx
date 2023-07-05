import { AddProductModal } from "./components/AddProductModal";
import { EditProductModal } from "./components/EditCardModal";
import { Cart } from "./components/Cart";
// import { Home } from "./components/pages/Home";

function App() {
  return (
    <>
      <Cart>
        <AddProductModal />
        <EditProductModal />
      </Cart>
    </>
  );
}
export default App;
