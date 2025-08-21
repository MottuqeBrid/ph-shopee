import { connectDB } from "@/lib/connectDB";
import Product from "@/models/product.Model";

interface ProductRequestBody {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  stock: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ProductRequestBody = await req.json();
    const { name, description, image, price, category, stock } = body;

    if (!name || !description || !image || !price || !category || !stock) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        {
          status: 400,
        }
      );
    }

    await connectDB();

    const newProduct = await Product.create({
      ...body,
    });

    return new Response(JSON.stringify({ success: true, data: newProduct }), {
      status: 201,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: "Failed to create product." }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("user");

  let query: Record<string, unknown> = {};
  if (userEmail) {
    query = { "createdBy.email": userEmail.trim() }; // <-- FIXED
  }

  await connectDB();
  const products = await Product.find(query).sort({ createdAt: -1 });
  return Response.json({ success: true, data: products });
}
