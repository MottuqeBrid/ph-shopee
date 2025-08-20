"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

type User = {
  email?: string;
  name?: string;
  image?: string;
};

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
export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session?.user as User);
    } else {
      setUser(null);
    }
  }, [session]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(user);
      if (!user?.email) return;
      const res = await fetch(`/api/product?user=${user.email}`);
      const data = await res.json();
      console.log(data);
      setProducts(data?.data || []);
    };
    fetchProducts();
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const res = await fetch(`/api/product/${id}`, { method: "DELETE" });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="overflow-x-auto mt-6">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      <table className="table w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="font-semibold">{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td className="text-xs text-gray-500">
                {new Date(p.createdAt).toLocaleDateString()}
              </td>
              <td>
                <button
                  className="btn btn-error btn-xs flex items-center gap-1"
                  onClick={() => handleDelete(p._id)}
                  title="Delete"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}
