import type { User } from "./user.interface";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: ProductSize[];
  gender: ProductGender;
  tags: string[];
  images: string[];
  user: User;
}

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ProductGender = "kid" | "men" | "women";
