import ProductImage1 from '@/assets/300 lmga.png';
import ProductImage2 from '@/assets/1500DCTV.png';
import ProductImage3 from '@/assets/850 dctv .png';

export enum ProductCategory {
  HorizontalBandsawMachine = "Horizontal Bandsaw Machine",
  VerticalBandsawMachine = "Vertical Bandsaw Machine",
  CircularSawMachine = "Circular Saw Machine",
  SpareParts = "Spare Parts",
  SpecialPurposeMachine = "Special Purpose Machine",
  AutomaticMachine = "Automatic Machine"
}
export type CategoryType = {
  name: ProductCategory;
  description: String;
  image: string;

}
export type Product = {
  id: string;
  name: string;
  price: number | "contact for price";
  images: string[];
  description: string;
  machineData: [string, string][];
  featured: boolean;
  type: ProductCategory;
};


export const products: Product[] = [
  {
    id: "1",
    name: "Automatic Machine A1",
    price: "contact for price",
    images: [
      ProductImage1,
      ProductImage2,
      ProductImage3,
    ],
    description: "High-quality automatic machine with advanced features.",
    machineData: [
      ["Brand", "Mechotech"],
      ["Model", "CSM 100"],
      ["Capacity", "Dia. 100 mm"],
      ["Motor Rotation Speed", "160 Mtrs./Min."]
    ],
    featured: true,
    type: ProductCategory.AutomaticMachine,
  },
  {
    id: "2",
    name: "Automatic Machine A2",
    price: 42000,
    images: [ProductImage2, ProductImage3, ProductImage1],
    description: "Another automatic machine with increased efficiency.",
    machineData: [
      ["Brand", "AutoMach"],
      ["Model", "AM200"],
      ["Capacity", "Dia. 120 mm"],
      ["Motor Rotation Speed", "180 Mtrs./Min."]
    ],
    featured: true,
    type: ProductCategory.AutomaticMachine,
  },
  {
    id: "3",
    name: "Automatic Machine A3",
    price: "contact for price",
    images: [ProductImage3, ProductImage1, ProductImage2],
    description: "Third model in automatic machines range.",
    machineData: [
      ["Brand", "PowerAuto"],
      ["Model", "PA300"],
      ["Capacity", "Dia. 140 mm"],
      ["Motor Rotation Speed", "200 Mtrs./Min."]
    ],
    featured: true,
    type: ProductCategory.AutomaticMachine,
  },
  {
      id: "4",
      name: "Automatic Machine A4",
      price: 48000,
      images: [ProductImage1, ProductImage2, ProductImage3],
      description: "High-performance automatic machine for demanding tasks.",
      machineData: [
          ["Brand", "SpeedTech"],
          ["Model", "ST400"],
          ["Capacity", "Dia. 160 mm"],
          ["Motor Rotation Speed", "220 Mtrs./Min."]
      ],
      featured: true,
      type: ProductCategory.AutomaticMachine,
  },
  {
      id: "5",
      name: "Automatic Machine A5",
      price: "contact for price",
      images: [ProductImage2, ProductImage3, ProductImage1],
      description: "Advanced automatic machine with integrated automation solutions.",
      machineData: [
          ["Brand", "InnoMech"],
          ["Model", "IM500"],
          ["Capacity", "Dia. 180 mm"],
          ["Motor Rotation Speed", "240 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.AutomaticMachine,
  },
  {
      id: "6",
      name: "Automatic Machine A6",
      price: 55000,
      images: [ProductImage3, ProductImage1, ProductImage2],
      description: "Robust automatic machine designed for long-lasting performance.",
      machineData: [
          ["Brand", "DuraMach"],
          ["Model", "DM600"],
          ["Capacity", "Dia. 200 mm"],
          ["Motor Rotation Speed", "260 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.AutomaticMachine,
  },
  {
    id: "7",
    name: "Heavy Duty Vertical Bandsaw Machine V1",
    price: 35000,
    images: [
      ProductImage1,
      ProductImage1,
      ProductImage1,
    ],
    description: "Versatile vertical bandsaw machine ideal for cutting various materials.",
    machineData: [
      ["Brand", "CutMaster"],
      ["Model", "VBS 2000"],
      ["Capacity", "Dia. 200 mm"],
      ["Motor Rotation Speed", "180 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.VerticalBandsawMachine,
  },
  {
    id: "8",
    name: "Heavy Duty Vertical Bandsaw Machine V2",
    price: 38000,
    images: [ProductImage2, ProductImage2, ProductImage2],
    description: "Improved model of vertical bandsaw for higher precision.",
    machineData: [
      ["Brand", "PrecisionCut"],
      ["Model", "PBC 2500"],
      ["Capacity", "Dia. 220 mm"],
      ["Motor Rotation Speed", "200 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.VerticalBandsawMachine,
  },
  {
      id: "9",
      name: "Heavy Duty Vertical Bandsaw Machine V3",
      price: 40000,
      images: [ProductImage3, ProductImage3, ProductImage3],
      description: "Advanced vertical bandsaw machine with enhanced cutting capabilities.",
      machineData: [
          ["Brand", "ProCut"],
          ["Model", "PCV 3000"],
          ["Capacity", "Dia. 240 mm"],
          ["Motor Rotation Speed", "220 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.VerticalBandsawMachine,
  },
  {
      id: "10",
      name: "Heavy Duty Vertical Bandsaw Machine V4",
      price: 42000,
      images: [ProductImage1, ProductImage1, ProductImage1],
      description: "Robust vertical bandsaw machine designed for heavy-duty applications.",
      machineData: [
          ["Brand", "StrongCut"],
          ["Model", "SCV 3500"],
          ["Capacity", "Dia. 260 mm"],
          ["Motor Rotation Speed", "240 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.VerticalBandsawMachine,
  },
  {
      id: "11",
      name: "Heavy Duty Vertical Bandsaw Machine V5",
      price: 45000,
      images: [ProductImage2, ProductImage2, ProductImage2],
      description: "High-performance vertical bandsaw machine with precision cutting technology.",
      machineData: [
          ["Brand", "EliteCut"],
          ["Model", "ECV 4000"],
          ["Capacity", "Dia. 280 mm"],
          ["Motor Rotation Speed", "260 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.VerticalBandsawMachine,
  },
  {
      id: "12",
      name: "Heavy Duty Vertical Bandsaw Machine V6",
      price: 48000,
      images: [ProductImage3, ProductImage3, ProductImage3],
      description: "Top-of-the-line vertical bandsaw machine for professional cutting solutions.",
      machineData: [
          ["Brand", "SupremeCut"],
          ["Model", "CSV 4500"],
          ["Capacity", "Dia. 300 mm"],
          ["Motor Rotation Speed", "280 Mtrs./Min."]
      ],
      featured: false,
      type: ProductCategory.VerticalBandsawMachine,
  },
  {
    id: "13",
    name: "Circular Saw Machine for Metal Cutting C1",
    price: 25000,
    images: [
      ProductImage1,
      ProductImage1,
      ProductImage1,
    ],
    description: "Circular saw machine designed for precision cutting of metal materials.",
    machineData: [
      ["Brand", "SteelCut"],
      ["Model", "CSM 500"],
      ["Capacity", "Dia. 150 mm"],
      ["Motor Rotation Speed", "220 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.CircularSawMachine,
  },
  {
    id: "14",
    name: "Circular Saw Machine for Metal Cutting C2",
    price: 27000,
    images: [ProductImage2, ProductImage2, ProductImage2],
    description: "Enhanced circular saw with laser guidance system.",
    machineData: [
      ["Brand", "LaserCut"],
      ["Model", "LCM 600"],
      ["Capacity", "Dia. 160 mm"],
      ["Motor Rotation Speed", "240 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.CircularSawMachine,
  },
  {
       id: "15",
        name: "Circular Saw Machine for Metal Cutting C3",
        price: 29000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "High-speed circular saw machine for efficient metal cutting.",
        machineData: [
            ["Brand", "RapidCut"],
            ["Model", "RCM 700"],
            ["Capacity", "Dia. 170 mm"],
            ["Motor Rotation Speed", "260 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.CircularSawMachine,
    },
    {
        id: "16",
        name: "Circular Saw Machine for Metal Cutting C4",
        price: 31000,
        images: [ProductImage1, ProductImage1, ProductImage1],
        description: "Precision circular saw machine with adjustable cutting angles.",
        machineData: [
            ["Brand", "AngleCut"],
            ["Model", "ACM 800"],
            ["Capacity", "Dia. 180 mm"],
            ["Motor Rotation Speed", "280 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.CircularSawMachine,
    },
    {
        id: "17",
        name: "Circular Saw Machine for Metal Cutting C5",
        price: 33000,
        images: [ProductImage2, ProductImage2, ProductImage2],
        description: "Durable circular saw machine designed for heavy-duty metal cutting.",
        machineData: [
            ["Brand", "ToughCut"],
            ["Model", "TCM 900"],
            ["Capacity", "Dia. 190 mm"],
            ["Motor Rotation Speed", "300 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.CircularSawMachine,
    },
    {
        id: "18",
        name: "Circular Saw Machine for Metal Cutting C6",
        price: 35000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Advanced circular saw machine with automatic material feeding system.",
        machineData: [
            ["Brand", "AutoCut"],
            ["Model", "AСM 1000"],
            ["Capacity", "Dia. 200 mm"],
            ["Motor Rotation Speed", "320 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.CircularSawMachine,
    },
  {
    id: "19",
    name: "Special Purpose CNC Milling Machine S1",
    price: 45000,
    images: [
      ProductImage1,
      ProductImage1,
      ProductImage1,
    ],
    description: "Customizable CNC milling machine for specific manufacturing needs.",
    machineData: [
      ["Brand", "CNC Pro"],
      ["Model", "SPM 3000"],
      ["Capacity", "Workpiece Size 500 x 500 mm"],
      ["Motor Rotation Speed", "3500 RPM"]
    ],
    featured: false,
    type: ProductCategory.SpecialPurposeMachine,
  },
  {
    id: "20",
    name: "Special Purpose CNC Milling Machine S2",
    price: 48000,
    images: [ProductImage2, ProductImage2, ProductImage2],
    description: "Enhanced CNC milling machine with advanced control system.",
    machineData: [
      ["Brand", "AdvancedCNC"],
      ["Model", "ACN 3500"],
      ["Capacity", "Workpiece Size 600 x 600 mm"],
      ["Motor Rotation Speed", "4000 RPM"]
    ],
    featured: false,
    type: ProductCategory.SpecialPurposeMachine,
  },
   {
        id: "21",
        name: "Special Purpose CNC Milling Machine S3",
        price: 50000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "High-precision CNC milling machine for complex machining tasks.",
        machineData: [
            ["Brand", "PreciseCNC"],
            ["Model", "PCN 4000"],
            ["Capacity", "Workpiece Size 700 x 700 mm"],
            ["Motor Rotation Speed", "4500 RPM"]
        ],
        featured: false,
        type: ProductCategory.SpecialPurposeMachine,
    },
    {
        id: "22",
        name: "Special Purpose CNC Milling Machine S4",
        price: 52000,
        images: [ProductImage1, ProductImage1, ProductImage1],
        description: "Robust CNC milling machine designed for heavy-duty manufacturing.",
        machineData: [
            ["Brand", "HeavyDutyCNC"],
            ["Model", "HDN 4500"],
            ["Capacity", "Workpiece Size 800 x 800 mm"],
            ["Motor Rotation Speed", "5000 RPM"]
        ],
        featured: false,
        type: ProductCategory.SpecialPurposeMachine,
    },
    {
        id: "23",
        name: "Special Purpose CNC Milling Machine S5",
        price: 55000,
        images: [ProductImage2, ProductImage2, ProductImage2],
        description: "Advanced CNC milling machine with automatic tool changing system.",
        machineData: [
            ["Brand", "AutoToolCNC"],
            ["Model", "ATN 5000"],
            ["Capacity", "Workpiece Size 900 x 900 mm"],
            ["Motor Rotation Speed", "5500 RPM"]
        ],
        featured: false,
        type: ProductCategory.SpecialPurposeMachine,
    },
    {
        id: "24",
        name: "Special Purpose CNC Milling Machine S6",
        price: 58000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Top-of-the-line CNC milling machine for professional manufacturing solutions.",
        machineData: [
            ["Brand", "SupremeCNC"],
            ["Model", "SCN 5500"],
            ["Capacity", "Workpiece Size 1000 x 1000 mm"],
            ["Motor Rotation Speed", "6000 RPM"]
        ],
        featured: false,
        type: ProductCategory.SpecialPurposeMachine,
    },
  {
    id: "25",
    name: "Horizontal Bandsaw Machine H1",
    price: 30000,
    images: [
      ProductImage1,
      ProductImage1,
      ProductImage1,
    ],
    description: "Heavy-duty horizontal bandsaw machine for efficient cutting of large materials.",
    machineData: [
      ["Brand", "SawTech"],
      ["Model", "HBM 700"],
      ["Capacity", "Dia. 300 mm"],
      ["Motor Rotation Speed", "180 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.HorizontalBandsawMachine,
  },
  {
    id: "26",
    name: "Horizontal Bandsaw Machine H2",
    price: 32000,
    images: [ProductImage2, ProductImage2, ProductImage2],
    description: "Improved version of the horizontal bandsaw for wider materials.",
    machineData: [
      ["Brand", "WideCut"],
      ["Model", "WCM 800"],
      ["Capacity", "Dia. 320 mm"],
      ["Motor Rotation Speed", "200 Mtrs./Min."]
    ],
    featured: false,
    type: ProductCategory.HorizontalBandsawMachine,
  },
    {
        id: "27",
        name: "Horizontal Bandsaw Machine H3",
        price: 34000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Advanced horizontal bandsaw machine with automatic material feeding.",
        machineData: [
            ["Brand", "AutoFeedSaw"],
            ["Model", "AFM 900"],
            ["Capacity", "Dia. 340 mm"],
            ["Motor Rotation Speed", "220 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.HorizontalBandsawMachine,
    },
    {
        id: "28",
        name: "Horizontal Bandsaw Machine H4",
        price: 36000,
        images: [ProductImage1, ProductImage1, ProductImage1],
        description: "Robust horizontal bandsaw machine designed for heavy-duty cutting tasks.",
        machineData: [
            ["Brand", "StrongSaw"],
            ["Model", "SSM 1000"],
            ["Capacity", "Dia. 360 mm"],
            ["Motor Rotation Speed", "240 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.HorizontalBandsawMachine,
    },
    {
        id: "29",
        name: "Horizontal Bandsaw Machine H5",
        price: 38000,
        images: [ProductImage2, ProductImage2, ProductImage2],
        description: "High-performance horizontal bandsaw machine with precision cutting accuracy.",
        machineData: [
            ["Brand", "PreciseSaw"],
            ["Model", "PSM 1100"],
            ["Capacity", "Dia. 380 mm"],
            ["Motor Rotation Speed", "260 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.HorizontalBandsawMachine,
    },
    {
        id: "30",
        name: "Horizontal Bandsaw Machine H6",
        price: 40000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Top-of-the-line horizontal bandsaw machine for professional cutting solutions.",
        machineData: [
            ["Brand", "EliteSaw"],
            ["Model", "ESM 1200"],
            ["Capacity", "Dia. 400 mm"],
            ["Motor Rotation Speed", "280 Mtrs./Min."]
        ],
        featured: false,
        type: ProductCategory.HorizontalBandsawMachine,
    },
  {
    id: "31",
    name: "Spare Parts Kit SP1",
    price: 500,
    images: [
      ProductImage1,
      ProductImage1,
      ProductImage1,
    ],
    description: "Spare parts kit for standard maintenance.",
    machineData: [
      ["Includes", "Blades, belts, filters"],
      ["Compatibility", "Various models"]
    ],
    featured: false,
    type: ProductCategory.SpareParts,
  },
  {
      id: "32",
      name: "Spare Parts Kit SP2",
      price: 750,
      images: [ProductImage2, ProductImage2, ProductImage2],
      description: "Spare parts kit for enhanced maintenance.",
      machineData: [
          ["Includes", "Blades, belts, filters, bearings"],
          ["Compatibility", "Advanced models"]
      ],
      featured: false,
      type: ProductCategory.SpareParts,
  },
    {
        id: "33",
        name: "Spare Parts Kit SP3",
        price: 1000,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Spare parts kit for comprehensive maintenance.",
        machineData: [
            ["Includes", "Blades, belts, filters, bearings, sensors"],
            ["Compatibility", "Premium models"]
        ],
        featured: false,
        type: ProductCategory.SpareParts,
    },
    {
        id: "34",
        name: "Spare Parts Kit SP4",
        price: 1250,
        images: [ProductImage1, ProductImage1, ProductImage1],
        description: "Spare parts kit for specialized maintenance.",
        machineData: [
            ["Includes", "Blades, belts, filters, bearings, sensors, gears"],
            ["Compatibility", "Specialized models"]
        ],
        featured: false,
        type: ProductCategory.SpareParts,
    },
    {
        id: "35",
        name: "Spare Parts Kit SP5",
        price: 1500,
        images: [ProductImage2, ProductImage2, ProductImage2],
        description: "Spare parts kit for ultimate maintenance.",
        machineData: [
            ["Includes", "Blades, belts, filters, bearings, sensors, gears, motors"],
            ["Compatibility", "Ultimate models"]
        ],
        featured: false,
        type: ProductCategory.SpareParts,
    },
    {
        id: "36",
        name: "Spare Parts Kit SP6",
        price: 1750,
        images: [ProductImage3, ProductImage3, ProductImage3],
        description: "Spare parts kit for professional maintenance.",
        machineData: [
            ["Includes", "Blades, belts, filters, bearings, sensors, gears, motors, controllers"],
            ["Compatibility", "Professional models"]
        ],
        featured: false,
        type: ProductCategory.SpareParts,
    }
];