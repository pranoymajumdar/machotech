import type { CategoryType } from "@/constants/products";
import { Link } from "@tanstack/react-router";

export default function CategoryCard({name, description, image} : CategoryType) {
  return (
    <Link to="/category/$categoryId" params={{
        categoryId: name
    }} className="flex flex-col gap-3">
        <img src={image} alt={name} className="rounded-md" />
        <div className="space-y-2">
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    </Link>
  )
}
