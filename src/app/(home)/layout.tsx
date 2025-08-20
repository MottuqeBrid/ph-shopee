import Footer from "@/sharedComponent/Footer";
import Navbar from "@/sharedComponent/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full bg-base-100 ">
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen"> {children}</main>
      <Footer />
    </section>
  );
}
