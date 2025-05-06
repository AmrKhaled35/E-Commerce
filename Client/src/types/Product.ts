export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  gallery?: string[];
  ingredients?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
  allergens?: string[];
  weight?: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}