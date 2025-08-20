"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Products from "./_component/Products";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex justify-center pt-10">
        <div className="card w-full max-w-sm bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-4">User Profile</h2>
            {session ? (
              <>
                {session.user && session.user.image ? (
                  <Image
                    width={400}
                    height={400}
                    src={session.user.image}
                    alt={session.user.name || "User avatar"}
                    className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-primary"
                  />
                ) : (
                  <FaUserCircle className="w-24 h-24 text-gray-400 mb-4" />
                )}
                <div className="mb-2">
                  <span className="font-semibold">Name:</span>{" "}
                  {session.user?.name || "N/A"}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Email:</span>{" "}
                  {session.user?.email || "N/A"}
                </div>
                <button
                  className="btn btn-error btn-outline w-full"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <p className="text-gray-500">
                Please log in to view your profile.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Products />
      </div>
    </div>
  );
}
