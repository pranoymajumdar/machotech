import { buttonVariants } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="my-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card shadow rounded-md p-4 border">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <p className='mb-4'>Manage your products here.</p>
          <Link to="/dashboard/products" className={cn(buttonVariants({variant: 'outline'}))}>
            Go to Products
          </Link>
        </div>
        <div className="bg-card shadow rounded-md p-4 border">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <p className='mb-4'>Manage your categories here.</p>
          <Link to="/dashboard/categories" className={cn(buttonVariants({variant: 'outline'}))}>
            Go to Categories
          </Link>
        </div>
      </div>
    </Container>
  )
}
