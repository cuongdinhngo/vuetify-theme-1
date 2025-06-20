import type { Category } from "~/types/category";

export interface Product {
  id: number,
  name: string,
  summary: string,
  description: string,
  price: number,
  rating: number,
  category: Category,
  photo: string
}