import ProductImage1 from '@/assets/300 lmga.png';
import ProductImage2 from '@/assets/1500DCTV.png';
import ProductImage3 from '@/assets/850 dctv .png';


export type Product = {
  id: string;
  name: string;
  price: number | "contact for price";
  images: string[];
  description: string;
  machineData: [string, string][];
  featured: boolean;
  type?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "contact for price",
    images: [
      ProductImage1,
      ProductImage2,
      ProductImage3,
    ],
    description: "High-quality wireless headphones with noise cancellation.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: true,
    type: "Bandsaw Machine",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=843565",
      "https://picsum.photos/400/400?random=8345654",
      "https://picsum.photos/400/400?random=8345136"
    ],
    description: "Feature-rich smartwatch with health tracking.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: true,
    type: "CNC Machine"
  },
  {
    id: "3",
    name: "Laptop Pro",
    price: 23456,
    images: [
      "https://picsum.photos/400/400?random=823546",
      "https://picsum.photos/400/400?random=823456",
      "https://picsum.photos/400/400?random=8621"
    ],
    description: "Powerful laptop for professionals and creators.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: true,
    type: "Bandsaw Machine"
  },
  {
    id: "4",
    name: "Wireless Earbuds",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=8345",
      "https://picsum.photos/400/400?random=8345",
      "https://picsum.photos/400/400?random=83456"
    ],
    description: "Premium wireless earbuds with amazing sound quality.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: true,
    type: "Bandsaw Machine"
  },
  {
    id: "5",
    name: "Bandsaw Machine",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=854",
      "https://picsum.photos/400/400?random=82345",
      "https://picsum.photos/400/400?random=8354"
    ],
    description: "Premium bandsaw machine with amazing sound quality.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: false,
    type: "Bandsaw Machine"
  },
  {
    id: "6",
    name: "CNC Machine",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=542",
      "https://picsum.photos/400/400?random=64",
      "https://picsum.photos/400/400?random=897"
    ],
    description: "Premium cnc machine with amazing sound quality.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: false,
    type: "CNC Machine"
  },
  {
    id: "7",
    name: "CNC Machine",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=123",
      "https://picsum.photos/400/400?random=452",
      "https://picsum.photos/400/400?random=65"
    ],
    description: "Premium cnc machine with amazing sound quality.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: false,
    type: "CNC Machine"
  },
  {
    id: "8",
    name: "CNC Machine",
    price: "contact for price",
    images: [
      "https://picsum.photos/400/400?random=23",
      "https://picsum.photos/400/400?random=54",
      "https://picsum.photos/400/400?random=56"
    ],
    description: "Premium cnc machine with amazing sound quality.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."],
      ["Power", "20 Hp"],
      ["Cooling Type", "Micromist"],
      ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
      ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
      ["Approx Weight in Kg", "5400 Kgs"],
      ["Country of Origin", "Made in India"]
    ],
    featured: false,
    type: "CNC Machine"
  }
];
