import Navbar from "@/sharedComponent/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full bg-base-100">
      <Navbar />
      <main className="max-w-7xl mx-auto"> {children}</main>
    </section>
  );
}
