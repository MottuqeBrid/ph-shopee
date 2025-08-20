export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/products/:id",
    "/cart",
    "/orders",
    "/profile",
  ],
};
