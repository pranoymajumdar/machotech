import { createFileRoute, Link } from '@tanstack/react-router'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/products')({
  component: RouteComponent,
})

function RouteComponent() {
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
  ]

  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <div className="mb-4">
        <Link className={cn(buttonVariants())} to='/dashboard/add/product'>
        Add Product
        </Link>
      </div>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="destructive" className="ml-2">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}