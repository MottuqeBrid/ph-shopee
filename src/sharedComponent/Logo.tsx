import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/" className="flex items-center gap-2 group">
        <FaShoppingCart className="text-2xl text-primary group-hover:scale-110 transition-transform duration-200" />
        <span className="text-2xl font-extrabold text-primary tracking-tight group-hover:text-blue-700 transition-colors duration-200">
          PH-Shopee
        </span>
      </Link>
    </div>
  );
}
