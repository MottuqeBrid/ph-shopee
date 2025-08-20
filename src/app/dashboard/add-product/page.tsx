"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false);

  if (!session)
    return <p className="text-center mt-10">Please login to add a product.</p>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Here you would send the form data to your API
    setTimeout(() => {
      setLoading(false);
      alert("Product added successfully!");
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
      });
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
        <div className="card-body">
          <h1 className="card-title text-2xl mb-4 flex items-center gap-2">
            <FaBoxOpen className="text-primary" /> Add Product
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered w-full"
              value={form.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              value={form.description}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              value={form.price}
              onChange={handleChange}
              min={0}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full"
              value={form.category}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              value={form.image}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              className="input input-bordered w-full"
              value={form.stock}
              onChange={handleChange}
              min={0}
              required
            />
            <button
              className="btn btn-primary w-full mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
