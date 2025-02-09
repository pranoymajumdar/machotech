import { Product } from "@/constants/products";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucidePhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import GetQuoteModal from "../GetQuoteModal";

const PriceSection = ({ productPrice }: { productPrice: Product["price"] }) => {
  if (productPrice === "contact for price") {
    return (
      <span className="flex items-center gap-4 text-primary text-2xl font-bold">
        <LucidePhoneCall />
        <span>Contact for price</span>
      </span>
    );
  }

  return (
    <span className="inline-block text-2xl font-bold text-primary">
      ₹ {productPrice.toLocaleString()}
    </span>
  );
};

export default function ProductInfo({
  productName,
  productPrice,
}: {
  productName: Product["name"];
  productPrice: Product["price"];
}) {
  const machineData = [
    ["Brand", "Mechotech"],
    ["Model", "CSM 100"],
    ["Capacity", "Dia. 100 mm"],
    ["Motor Rotation Speed", "160 Mtrs./Min."],
    ["Power", "20 Hp"],
    ["Cooling Type", "Micromist"],
    ["Automatic Chip Conveyor", "Motorized Screw type Swarf Conveyor"],
    ["Overall Size in mm", "2500 x 2700 x 1900 mm"],
    ["Approx Weight in Kg", "5400 Kgs"],
    ["Country of Origin", "Made in India"],
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{productName}</h1>

      <p className="text-muted-foreground">
        Experience cutting-edge technology with this Smart Watch, designed for
        both industrial and personal applications. Featuring high durability,
        efficient performance, and a sleek design.
      </p>
      <div className="grid space-y-1">
        <div className="flex justify-between items-center">
          <PriceSection productPrice={productPrice} />
          <GetQuoteModal>
          <Button variant='outline'>Get Quote</Button>
          </GetQuoteModal>
        </div>
        <span className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit.
        </span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Usage/Application</TableHead>
            <TableHead>Industrial</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {machineData.map((row) => (
            <TableRow key={row[0]}>
              <TableCell className="font-medium">{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
