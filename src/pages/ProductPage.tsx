import { BsCartPlus } from "react-icons/bs";
import { HighlightProductCard } from "../components/HighlightProductCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IProduct } from "../context/CartContext";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const { selectedProductId, products, selectedProduct, navigate, addToCart } =
    useContext(CartContext);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedProduct === undefined) navigate("/");
    const filteredArray = products.filter(
      (product) => product.id.toString() !== selectedProductId
    );
    setFilteredProducts(filteredArray);
  }, [selectedProductId]);

  return (
    <>
      <main className="w-full mx-auto min-h-screen flex flex-col gap-10 py-16 overflow-hidden">
        <div className="flex gap-3 justify-center text-center uppercase font-oswald text-sm font-medium">
          <Link to="/" className="link-hover cursor-pointer">
            Home
          </Link>
          {">"}
          <a className="select-none">{selectedProduct?.name}</a>
        </div>
        <div className="w-5/6 mx-auto flex flex-col sm:flex-row gap-10 justify-center items-center pb-10">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={selectedProduct?.image}
              className="object-bottom hover:scale-[105%] transition-all duration-300 object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 md:w-1/3 sm:w-1/2">
            <h3 className="text-base font-roboto font-semibold">
              {selectedProduct?.name}
            </h3>
            <p className="uppercase text-xl font-oswald font-normal">
              {selectedProduct?.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-base font-roboto font-light">
              {selectedProduct?.description}
            </p>
            <button
              onClick={addToCart}
              className="btn btn-primary flex-nowrap uppercase gap-3 mt-3 w-fit font-thin tracking-widest font-oswald items-center flex"
            >
              <BsCartPlus className="text-xl flex-shrink-0" />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div className="sm:w-[82vw] w-[95vw] sm:mx-auto flex flex-col gap-10 lg:gap-14 overflow-hidden">
          <h2 className="w-5/6 mx-auto md:w-full font-oswald uppercase font-medium text-4xl lg:text-5xl tracking-wide">
            Produtos em destaque
          </h2>
          <ul className="w-[93%] sm:w-full pr-6 sm:pr-0 ml-auto flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
            {filteredProducts.map((product) => {
              return (
                <HighlightProductCard
                  key={product.id}
                  productPrice={product.price}
                  productTitle={product.name}
                  imgSource={product.image}
                  productId={product.id}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};
