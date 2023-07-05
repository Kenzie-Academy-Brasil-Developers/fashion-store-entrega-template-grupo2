import { AiOutlineShoppingCart } from "react-icons/ai";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const ProductCard = () => {
  return (
    <>
      {products.map((product) => (
        <li key={product.id} className="flex flex-col w-64 gap-5">
          {/* <link to={`/products/${product.id}`}> */}
          <h3 className="font-oswald font-extrabold tracking-wide">
            {product.name}
          </h3>
          <img src={product.image} alt={product.name} className="rounded-3xl" />
          <p className="uppercase font-oswald font-bold">
            Price: ${product.price}
          </p>
          <div className="flex flex-row gap-10">
            <AiOutlineShoppingCart className="text-3xl bg-gray-500" />
            <p className="uppercase font-oswald font-bold tracking-widest items-center">
              Saiba mais
            </p>
          </div>
          {/* </link> */}
        </li>
      ))}
    </>
  );
};

//Array mockado

const products: IProduct[] = [
  {
    id: 1,
    name: "Blazer Branco Elegante",
    price: 490,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.",
    image:
      "https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_4_hwrkgf.jpg",
  },
  {
    id: 2,
    name: "Blazer Laranja",
    price: 320,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.",
    image:
      "https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_7_ofhcmq.jpg",
  },
  {
    id: 3,
    name: "Sapatos Amarelo",
    price: 490,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.",
    image:
      "https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_6_p53ulc.jpg",
  },
  {
    id: 4,
    name: "Calça Preta",
    price: 140,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.",
    image:
      "https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_8_ijrp7v.jpg",
  },
];
