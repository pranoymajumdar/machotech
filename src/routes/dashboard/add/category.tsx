import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import { BASE_API_URL } from "@/constants/utils";
import { useState, useEffect } from "react";
import { Upload, ImageIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { getAuthHeadersForFormData, isAuthenticated } from "@/lib/auth";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Category name must be at least 5 characters")
    .max(100, "Category name must not exceed 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must not exceed 200 characters"),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Image size must be less than ${Math.round(
        MAX_FILE_SIZE / (1024 * 1024)
      )}MB`
    )
    .refine((file) => file.type.startsWith("image/"), "File must be an image")
    .optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ImageUploader = ({
  onChange,
  value,
}: {
  onChange: (file: File | undefined) => void;
  value?: File;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);

    if (file) {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setError(
          `Image size must be less than ${Math.round(
            MAX_FILE_SIZE / (1024 * 1024)
          )}MB`
        );
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("File must be an image");
        return;
      }

      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      onChange(undefined);
      setPreview(null);
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors",
          error
            ? "border-destructive/50 hover:border-destructive"
            : "border-gray-300 hover:bg-gray-50"
        )}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        {preview ? (
          <div className="w-full flex flex-col items-center space-y-2">
            <div className="relative w-32 h-32 rounded-md overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500">Click to change image</p>
          </div>
        ) : (
          <div className="text-center">
            <ImageIcon
              className={cn(
                "mx-auto h-12 w-12",
                error ? "text-destructive" : "text-gray-400"
              )}
            />
            <div className="mt-2 flex text-sm text-gray-600">
              <p className="pl-1">Click to upload a category image</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Any image format, up to{" "}
              {Math.round(MAX_FILE_SIZE / (1024 * 1024))}MB
            </p>
          </div>
        )}

        <input
          id="file-upload"
          name="file-upload"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleChange}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {value && !preview && !error && (
        <p className="text-sm text-gray-500">
          {value.name} ({Math.round(value.size / 1024)} KB)
        </p>
      )}
    </div>
  );
};

function RouteComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name.trim());
      formData.append("description", values.description.trim());
      if (values.image) {
        formData.append("image", values.image);
      }

      const response = await fetch(
        new URL("/categories", BASE_API_URL).toString(),
        {
          method: "POST",
          headers: getAuthHeadersForFormData(),
          body: formData,
        }
      );

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 409) {
          toast.error("A category with this name already exists");
        } else {
          toast.error(data.error || "Failed to create category");
        }
        return;
      }

      const data = await response.json();
      toast.success("Category created successfully!");
      form.reset();
      navigate({ to: "/dashboard/categories" });
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to create category. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ProtectedRoute>
      <Container className="py-10">
        <Card className="max-w-lg mx-auto shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-semibold">
              Add New Category
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Category Image</FormLabel>
                      <FormControl>
                        <ImageUploader onChange={onChange} value={value} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Electronics, Home Decor"
                            {...field}
                            className="h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe this category..."
                            className="min-h-24 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <CardFooter className="px-0 pb-0 pt-4">
                  <Button
                    type="submit"
                    className="w-full h-11 font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Creating Category...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Create Category
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </ProtectedRoute>
  );
}

export const Route = createFileRoute("/dashboard/add/category")({
  component: RouteComponent,
});
