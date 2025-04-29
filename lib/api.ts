import { Product } from "../types/product";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();

};

export const fetchProductById = async (id: string): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Product Not Found");
  return res.json();
};
