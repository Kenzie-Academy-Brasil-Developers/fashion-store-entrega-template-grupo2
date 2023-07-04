<<<<<<< HEAD
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
=======
// import { Home } from "./components/pages/Home";
import { ProductPage } from "./components/pages/ProductPage";

function App() {
  return (
    <div>
      <ProductPage />
    </div>
>>>>>>> origin/dev-virgynia
  );
}

export default App;
