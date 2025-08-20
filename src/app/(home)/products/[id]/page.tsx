type Props = { params: { id: string } };

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1000,
  },
  { id: 2, name: "Phone", description: "Latest smartphone", price: 700 },
];

export default function ProductDetails({ params }: Props) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl">{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
