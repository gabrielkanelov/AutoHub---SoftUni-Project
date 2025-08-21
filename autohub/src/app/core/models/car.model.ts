export interface Car {
  _id: string;
  brand: string;
  model: string; // <-- добави това свойство
  year: number;
  price: number;
  imageUrl?: string;
}
