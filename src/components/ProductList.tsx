import { IProduct } from "../providers/ProductContext";
import { HighlightProductCard } from "./HighlightProductCard";

interface IProductListProps {
  productArray: IProduct[];
}

export const ProductList = ({ productArray }: IProductListProps) => {
  return (
    <ul className="w-full flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
      {productArray.map((product) => (
        <HighlightProductCard
          key={product.id}
          productPrice={product.price}
          productTitle={product.name}
          imgSource={product.image}
          productId={product.id}
          loading={false}
        />
      ))}
    </ul>
  );
};
