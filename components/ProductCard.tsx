import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";
const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/products/${product.id}`}>
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="object-contain mx-auto h-40"
      />
      <h3 className="mt-2 text-sm font-medium line-clamp-2  ">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-lg font-semibold mt-1">${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
