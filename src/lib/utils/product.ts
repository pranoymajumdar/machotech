import type { Product } from "@/components/ProductModal";

export function normalizeProduct(product: Product): Product {
  try {
    const machineData = typeof product.machineData === 'string'
      ? JSON.parse(product.machineData)
      : product.machineData;

    return {
      ...product,
      machineData: {
        specifications: typeof machineData?.specifications === 'string'
          ? JSON.parse(machineData.specifications)
          : machineData?.specifications || {},
        images: Array.isArray(machineData?.images)
          ? machineData.images
          : [],
        categories: Array.isArray(machineData?.categories)
          ? machineData.categories
          : []
      }
    };
  } catch {
    return {
      ...product,
      machineData: {
        specifications: {},
        images: [],
        categories: []
      }
    };
  }
} 