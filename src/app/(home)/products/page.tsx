"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdBy: {
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data?.data || []);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <li
            key={p._id}
            className="border p-4 rounded shadow bg-base-200 flex flex-col"
          >
            <Image
              width={500}
              height={500}
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{p.name}</h2>
            <p className="text-gray-600 mb-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="badge text-neutral badge-primary">
                {p.category}
              </span>
              <span className="badge badge-secondary">Stock: {p.stock}</span>
            </div>
            <p className="text-blue-600 font-bold mb-1">${p.price}</p>
            <p className="text-xs text-gray-500 mb-2">
              Added by: {p.createdBy?.name} ({p.createdBy?.email})
            </p>
            <Link
              href={`/products/${p._id}`}
              className="btn btn-outline btn-sm self-end"
            >
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
