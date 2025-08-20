"use client";

import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Right Side - Image */}
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBB7N4-brhveddhCclAOvENqkG0U5FfVJaQ&s"
          alt="Shopping illustration"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />

        {/* Left Side - Text */}
        <div>
          <h1 className="text-5xl font-bold flex items-center gap-2">
            <FaShoppingCart className="text-primary" />
            ph-shopee
          </h1>
          <p className="py-6 text-lg">
            🛍️ <span className="font-semibold">“Shop Smart, Live Better”</span>—
            your trusted destination for amazing products at unbeatable prices.
          </p>
          <Link href="/products" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}
