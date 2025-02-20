import type { Product } from "@/components/ProductModal";
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

const PriceSection = ({ product }: { product: Product }) => {
  if (product.isContactForPrice || !product.price) {
    return (
      <span className="flex items-center gap-4 text-primary text-2xl font-bold">
        <LucidePhoneCall />
        <span>Contact for price</span>
      </span>
    );
  }

  return (
    <span className="inline-block space-x-1 text-2xl font-bold text-primary gap-2">
      <span>₹ {Number(product.price).toLocaleString()}</span>
      <span className="text-muted-foreground text-sm">{"(approx)"}</span>
    </span>
  );
};

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const specifications = product.machineData.specifications || {};
  
  const specEntries = Object.entries(specifications)
    .filter(([key]) => !['images', 'categories'].includes(key))
    .map(([key, value]) => ({
      key: key.replace(/([A-Z])/g, ' $1')
         .replace(/_/g, ' ')
         .replace(/^./, str => str.toUpperCase()),
      value: value || ''
    }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="grid space-y-1">
        <div className="flex justify-between items-center">
          <PriceSection product={product} />
          <GetQuoteModal>
            <Button variant="outline">Get Quote</Button>
          </GetQuoteModal>
        </div>
      </div>
      
      {specEntries.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specEntries.map(({ key, value }) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <p className="text-muted-foreground">{product.description}</p>
    </div>
  );
}
