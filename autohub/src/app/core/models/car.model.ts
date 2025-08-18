export interface Car {
  id: string;
  title: string;
  brand: 'BMW' | 'Mercedes' | 'Audi' | 'Porsche' | 'Other';
  body: 'Sedan' | 'SUV' | 'Coupe' | 'Hatchback' | 'Other';
  fuel: 'Бензин' | 'Дизел' | 'Хибрид' | 'Електрически';
  transmission: 'Ръчна' | 'Автоматична';
  price: number;
  year: number;
  color: string;
  doors: 2 | 3 | 4 | 5;
  power: number; // к.с.
  mileage: number; // км
  extras?: string[];
  steering: 'Ляв' | 'Десен';
  imageUrl: string;
  ownerId: string;
  likes: number;
  createdAt: number;
}
