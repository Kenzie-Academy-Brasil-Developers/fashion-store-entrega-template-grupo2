<<<<<<< Updated upstream
import { IProduct } from "../providers/ProductContext";
import { HighlightProductCard } from "./HighlightProductCard";

interface IProductListProps {
  productArray: IProduct[];
}

export const ProductList = ({ productArray }: IProductListProps) => {
  return (
    <ul className="w-full flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
      {productArray.map((product) => (
=======
import { IProduct, IProductListProps } from "../interfaces";
import { HighlightProductCard } from "./HighlightProductCard";

export const ProductList = ({ productArray, loading }: IProductListProps) => {
  return (
    <ul className="w-full flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
      {productArray.map((product: IProduct) => (
>>>>>>> Stashed changes
        <HighlightProductCard
          key={product.id}
          productPrice={product.price}
          productTitle={product.name}
          imgSource={product.image}
          productId={product.id}
<<<<<<< Updated upstream
=======
          loading={loading}
>>>>>>> Stashed changes
        />
      ))}
    </ul>
  );
};
