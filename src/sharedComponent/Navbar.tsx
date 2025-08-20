"use client";

import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemToggle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
type User = {
  email?: string;
  name?: string;
  image?: string;
};

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  const { data: session, status } = useSession();
  // Fetch user profile

  useEffect(() => {
    if (session) {
      console.log(session);
      setUser(session?.user as User);
    } else {
      setUser(null);
    }
  }, [session]);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Navigation Links
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      {user && (
        <li>
          <Link href="/dashboard/add-product">Add Product</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-sm w-full sticky top-0 z-50 bg-base-100">
      <nav className="navbar max-w-7xl mx-auto">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Logo />
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-2">
          <ThemeToggle />
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <Image
                    src={
                      user?.image ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                    }
                    alt={user?.name || "profile picture"}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-primary text-neutral">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
