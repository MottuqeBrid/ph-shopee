import { connectDB } from "@/lib/connectDB";
import Product from "@/models/product.Model";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectDB();
  const product = await Product.findById(id);
  if (!product) {
    return Response.json(
      { success: false, error: "Product not found." },
      { status: 404 }
    );
  }
  return Response.json({ success: true, data: product });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  await connectDB();
  const product = await Product.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  if (!product) {
    return Response.json(
      { success: false, error: "Product not found." },
      { status: 404 }
    );
  }
  return Response.json({ success: true, data: product });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectDB();
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return Response.json(
      { success: false, error: "Product not found." },
      { status: 404 }
    );
  }
  return Response.json({ success: true, data: product });
}
