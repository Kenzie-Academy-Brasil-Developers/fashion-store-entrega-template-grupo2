import { RoutesMain } from "./routes/RoutesMain";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Cart>
        <RoutesMain />
      </Cart>
    </>
  );
}

export default App;
