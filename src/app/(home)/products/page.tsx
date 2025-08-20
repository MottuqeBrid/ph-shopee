import Link from "next/link";

const products = [
  { id: 1, name: "Laptop", description: "High performance", price: 1000 },
  { id: 2, name: "Phone", description: "Latest model", price: 700 },
];

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <ul className="space-y-3">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p>${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-500">Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
