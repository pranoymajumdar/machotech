import { Link } from "@tanstack/react-router";
import { BASE_API_URL, Category } from "@/constants/utils";


export default function CategoryCard({ id, name, imageUrl, description }: Category) {
  return (
    <Link 
      to="/category/$categoryId" 
      params={{
        categoryId: id 
      }} 
      className="flex flex-col gap-3"
    >
      <img src={BASE_API_URL + imageUrl} alt={name} className="rounded-md aspect-[16/9] object-contain" />
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
