"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
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

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/product/${params?.id}`);
      const data = await res.json();
      setProduct(data?.data || null);
      setLoading(false);
    };
    getProduct();
  }, [params.id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!product) return <p className="p-6 text-red-500">Product not found</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-base-200 rounded shadow p-6 flex flex-col md:flex-row gap-6">
        <Image
          width={500}
          height={500}
          src={product.image}
          alt={product.name}
          className="w-full md:w-64 h-64 object-cover rounded"
        />
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {product.name}
          </h1>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="badge badge-primary">{product.category}</span>
            <span className="badge badge-secondary">
              Stock: {product.stock}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>
          <p className="text-2xl text-blue-600 font-bold mb-2">
            ${product.price}
          </p>
          <p className="text-xs text-gray-500 mb-1">
            Added by: {product.createdBy?.name} ({product.createdBy?.email})
          </p>
          <p className="text-xs text-gray-400">
            Created: {new Date(product.createdAt).toLocaleString()}
          </p>
          <p className="text-xs text-gray-400">
            Updated: {new Date(product.updatedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex-none w-full">
          {/* <button className="btn btn-primary text-neutral">Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
}
