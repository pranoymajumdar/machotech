import { Link } from "@tanstack/react-router";
import { BASE_API_URL } from "@/constants/utils";

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

export default function CategoryCard({ id, name, imageUrl }: CategoryCardProps) {
  return (
    <Link 
      to="/category/$categoryId" 
      params={{
        categoryId: id // Use name for the URL
      }} 
      className="flex flex-col gap-3"
    >
      <img src={BASE_API_URL + imageUrl} alt={name} className="rounded-md" />
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">{name}</h2>
      </div>
    </Link>
  )
}
