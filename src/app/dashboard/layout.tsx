import Footer from "@/sharedComponent/Footer";
import Navbar from "@/sharedComponent/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="">
      <Navbar />
      <main className="max-w-7xl mx-auto"> {children}</main>
      <Footer />
    </section>
  );
}
