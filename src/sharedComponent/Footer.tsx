import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-base-200 py-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <Logo />
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-blue-600 transition-colors"
          >
            Products
          </Link>
        </nav>
        <span className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} PH-Shopee. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
