"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  FaBoxOpen,
  FaTag,
  FaBoxes,
  FaDollarSign,
  FaLayerGroup,
  FaImage,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    level: "",
    image: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false);

  if (!session)
    return (
      <p className="text-center mt-10 text-red-500">
        Please login to add a product.
      </p>
    );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        createdBy: {
          name: session.user?.name || "Unknown",
          email: session.user?.email || "Unknown",
        },
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        level: "",
        image: "",
        stock: "",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-[80vh] bg-base-200 p-4 pt-10">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-8">
        <div className="card-body">
          <h1 className="card-title text-3xl mb-6 flex items-center gap-3">
            <FaBoxOpen className="text-primary" /> Add New Product
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaTag className="text-primary" /> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full pl-2 "
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaLayerGroup className="text-primary" /> Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full pl-2"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* Level */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaLayerGroup className="text-primary" /> Level
              </label>
              <input
                type="text"
                name="level"
                placeholder="Level"
                className="input input-bordered w-full pl-2"
                value={form.level}
                onChange={handleChange}
              />
            </div>

            {/* Price */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaDollarSign className="text-primary" /> Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full pl-2"
                value={form.price}
                onChange={handleChange}
                min={0}
                step={0.01}
                required
              />
            </div>

            {/* Stock */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaBoxes className="text-primary" /> Stock
              </label>
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                className="input input-bordered w-full pl-2"
                value={form.stock}
                onChange={handleChange}
                min={0}
                required
              />
            </div>

            {/* Image */}
            <div className="relative">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaImage className="text-primary" /> Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full pl-2"
                value={form.image}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="col-span-1 lg:col-span-2">
              <label className="label pl-1 pb-1 text-base-content/80 flex items-center gap-1">
                <FaBoxes className="text-primary" /> Description
              </label>
              <textarea
                name="description"
                placeholder="Product Description"
                className="textarea textarea-bordered w-full"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 lg:col-span-2">
              <button
                type="submit"
                className={`btn btn-primary w-full mt-2 text-neutral ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
