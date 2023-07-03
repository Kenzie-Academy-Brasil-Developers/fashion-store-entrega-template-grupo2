import { AddProductModal } from "./components/AddProductModal";
import { EditProductModal } from "./components/EditCardModal";
import { Cart } from "./components/Cart";

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
