import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  logo: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    logo: "https://technext.github.io/seogram/assets/img/services/service-1.svg",
    title: "TECH Consultancy",
    description:
      "We help you define your TECH objective & develop a realistic strategy with you",
  },
  {
    id: 2,
    logo: "https://technext.github.io/seogram/assets/img/services/service-2.svg",
    title: "Content Marketing",
    description:
      "We help you define your TECH objective & develop a realistic strategy with you",
  },
  {
    id: 3,
    logo: "https://technext.github.io/seogram/assets/img/services/service-3.svg",
    title: "Keyword Research",
    description:
      "We help you define your TECH objective & develop a realistic strategy with you",
  },
];

function ProductCard({ logo, title, description }: Product) {
  return (
    <li className="my-4 mx-auto py-8 px-5 max-w-[300px] text-center rounded-lg shadow-product">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      {/* Title and Description */}
      <div>
        <h5 className="font-medium text-xl mb-2">{title}</h5>
        <p className="mb-4">{description}</p>
        <Link href="#" className="bg-[#6C55F9] text-[#fff] py-2 px-6 rounded">
          Read More
        </Link>
      </div>
    </li>
  );
}

const Products = () => {
  return (
    <section className="py-[80px]">
      <div className="container">
        {/* Loop Product Card */}
        <div className="flex flex-wrap text-[#898798] justify-center">
          <ul className="px-[15px] lg:flex lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
