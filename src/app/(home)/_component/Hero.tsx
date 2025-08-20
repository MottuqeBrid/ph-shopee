"use client";

import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-200 to-primary/10 animate-fade-in">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Right Side - Image */}
        <div className="animate-slide-in-right">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBB7N4-brhveddhCclAOvENqkG0U5FfVJaQ&s"
            alt="Shopping illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl border-4 border-primary/20"
            priority
          />
        </div>

        {/* Left Side - Text */}
        <div className="max-w-xl animate-slide-in-left">
          <h1 className="text-5xl font-bold flex items-center gap-3 mb-2">
            <FaShoppingCart className="text-primary drop-shadow" />
            PH-Shopee
          </h1>
          <div className="badge badge-primary badge-lg mb-4 text-neutral">
            Shop Smart, Live Better
          </div>
          <p className="py-4 text-lg text-base-content/80">
            🛍️ <span className="font-semibold">Your trusted destination</span>{" "}
            for amazing products at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="btn btn-primary btn-wide flex items-center gap-2 shadow-lg hover:scale-105 transition-transform text-neutral"
          >
            <FaShoppingCart className="w-5 h-5" />
            Explore Products
          </Link>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        @keyframes slide-in-left {
          from {
            transform: translateX(-40px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s 0.2s both;
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(40px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s 0.2s both;
        }
      `}</style>
    </div>
  );
}
