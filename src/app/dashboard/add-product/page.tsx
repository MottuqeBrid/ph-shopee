"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  if (!session) return <p>Please login to add a product.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Added:", form);
    alert("Product added successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 rounded w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded w-full"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Add
        </button>
      </form>
    </div>
  );
}
