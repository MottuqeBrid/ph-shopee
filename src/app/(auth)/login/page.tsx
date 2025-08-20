"use client";

import Logo from "@/sharedComponent/Logo";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <Logo />
          <h2 className="card-title mb-6 mt-6">Sign in to your account</h2>
          <button
            className="btn btn-outline btn-primary w-full flex items-center gap-2"
            onClick={() => signIn("google", { callbackUrl: "/products" })}
          >
            <FcGoogle className="w-6 h-6" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
