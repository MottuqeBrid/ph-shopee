"use client";

import { FaTag } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
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

// const products = [
//   {
//     id: 1,
//     name: "Laptop Pro X",
//     description: "High performance laptop for professionals.",
//     price: 1200,
//     image:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=350&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Smartphone Ultra",
//     description: "Latest generation smartphone with advanced features.",
//     price: 900,
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=350&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Wireless Headphones",
//     description: "Noise-cancelling, long battery life, premium sound.",
//     price: 250,
//     image:
//       "https://xunddbangladesh.com/wp-content/uploads/2024/12/XUNDD-D002-Wireless-Headphones-Over-Ear-Bluetooth-5.3-Headset-Foldable-Design-2.webp",
//   },
// ];

export default function ProductHighlights() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data?.data?.slice(0, 6) || []);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
            <FaTag className="text-primary" />
            Featured Products
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Discover our best-selling and most loved products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product._id} className="card bg-base-200 shadow-xl">
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={350}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>{product.description}</p>
                <p className="font-semibold text-primary">${product.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${product._id}`}
                    className="btn btn-sm btn-primary text-neutral"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End of Product Grid */}
        <div className="mt-8 flex justify-center">
          <Link href="/products" className="btn btn-primary text-neutral">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
