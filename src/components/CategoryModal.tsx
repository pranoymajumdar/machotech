import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { BASE_API_URL } from '@/constants/utils';

export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface CategoryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onSuccess: () => void;
}

export const CategoryEditModal = ({ isOpen, onClose, category, onSuccess }: CategoryEditModalProps) => {
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    image: File | null;
  }>({
    name: '',
    description: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form data when category changes
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || '',
        description: category.description || '',
        image: null,
      });
      setImagePreview(category.imageUrl || null);
      setError(null);
    }
  }, [category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
    
    // Create preview URL
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formPayload = new FormData();
      if (formData.name) formPayload.append('name', formData.name);
      if (formData.description) formPayload.append('description', formData.description);
      if (formData.image) formPayload.append('image', formData.image);
      
      
      const response = await fetch(new URL(`/categories/${category.id}`, BASE_API_URL).toString(), {
        method: 'PUT',
        body: formPayload,
      });
      
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `HTTP error ${response.status}` }));
        return toast.error(errorData.error || `Failed to update category (${response.status})`);
        
      }
      
      toast.success('Category updated successfully');
      
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Update error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to update category';
      setError(errorMessage);
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Make changes to the category information below.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Category name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Category description"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="cursor-pointer"
            />
            
            {imagePreview && (
              <div className="mt-2 flex justify-center">
                <img 
                  src={imagePreview} 
                  alt="Category preview" 
                  className="max-h-40 object-contain rounded-md border" 
                />
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update Category'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};