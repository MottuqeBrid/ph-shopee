import mongoose, { Schema, Document, Model } from "mongoose";

// Define product interface
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdBy: {
    name: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    image: {
      type: String,
      required: [true, "Product image URL is required"],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    createdBy: {
      name: {
        type: String,
      },
      email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
      },
    },
  },
  { timestamps: true }
);

// Prevent model overwrite error in Next.js dev
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
