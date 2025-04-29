import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";
import { fetchAllProducts, fetchProductById } from "../../lib/api";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAllProducts();
  const paths = products.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const product = await fetchProductById(params?.id as string);
    return { props: { product } };
  } catch {
    return { notFound: true };
  }
};

const ProductDetail = ({ product }: { product: Product }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <Link href="/" className="text-blue-600 hover:underline">
      &larr; Back to Products
    </Link>
    <div className="mt-6 flex flex-col md:flex-row gap-8">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="object-contain mx-auto"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-2xl font-semibold mt-2">${product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </div>
  </div>
);

export default ProductDetail;
