export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bread",
    price: 20,
    description: "Delicious homemade fresh bread baked daily",
    image: "https://via.placeholder.com/300x300?text=Bread",
    category: "Bread",
  },
  {
    id: 2,
    name: "Creamy Butter",
    price: 40,
    description: "Pure and creamy butter made from fresh milk",
    image: "https://via.placeholder.com/300x300?text=Butter",
    category: "Butter",
  },
  {
    id: 3,
    name: "Strawberry Jam",
    price: 60,
    description: "Sweet and tangy strawberry jam with real fruits",
    image: "https://via.placeholder.com/300x300?text=Jam",
    category: "Jam",
  },
];