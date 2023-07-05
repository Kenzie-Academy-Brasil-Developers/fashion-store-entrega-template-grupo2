import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  return (
    <div className="overflow-x-auto">
      <ul className="flex flex-row gap-5 py-8">
        <ProductCard />
      </ul>
    </div>
  );
};
