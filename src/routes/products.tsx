import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  LucideFilter,
  LucideSearch,
  LucideX,
  LucideEye,
  LucideArrowRight,
  LucideSettings,
  LucideGauge,
} from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import Container from "@/components/ui/container";
import { products } from "@/constants/products";
import { productFeatures } from "@/constants/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { id: "all", label: "All Products" },
  { id: "automatic", label: "Automatic" },
  { id: "semi-automatic", label: "Semi-Automatic" },
  { id: "manual", label: "Manual" },
  { id: "hydraulic", label: "Hydraulic" },
];

// Convert productFeatures object to array for filtering
const featuresList = Object.values(productFeatures);

// Group features by their categories for better organization
const groupedFeatures = {
  types: [
    productFeatures.automatic,
    productFeatures.semiAutomatic,
    productFeatures.manual,
    productFeatures.hydraulic
  ],
  categories: [
    productFeatures.heavyDuty,
    productFeatures.mediumDuty,
    productFeatures.premium,
    productFeatures.standard
  ],
  controls: [
    productFeatures.digitalControl,
    productFeatures.manualControl,
    productFeatures.cncControl,
    productFeatures.smartControl
  ],
  features: [
    productFeatures.autoFeed,
    productFeatures.dualColumn,
    productFeatures.quickClamp,
    productFeatures.largeCapacity,
    productFeatures.precision,
    productFeatures.compact,
    productFeatures.iotReady,
    productFeatures.angleCut,
    productFeatures.digitalDisplay,
    productFeatures.highSpeed,
    productFeatures.monitoringSystem,
    productFeatures.spaceSaving,
    productFeatures.powerCut,
    productFeatures.educational
  ],
  additional: [
    productFeatures.industrial,
    productFeatures.continuous,
    productFeatures.advanced,
    productFeatures.professional,
    productFeatures.workshop,
    productFeatures.ultimate,
    productFeatures.production,
    productFeatures.training,
    productFeatures.basic
  ]
};

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Keep this memoization as it's actually useful for filtering
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.type === selectedCategory;
      const matchesFeatures = selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => product.features.includes(feature));
      const matchesSearch = searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesFeatures && matchesSearch;
    });
  }, [selectedCategory, selectedFeatures, searchQuery]);

  // Memoize category click handler
  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Memoize feature toggle handler
  const handleFeatureToggle = useCallback(
    (feature: string, checked: boolean) => {
      setSelectedFeatures((prev) =>
        checked ? [...prev, feature] : prev.filter((f) => f !== feature)
      );
    },
    []
  );

  // Memoize reset handler
  const handleReset = useCallback(() => {
    setSelectedCategory("all");
    setSelectedFeatures([]);
    setPriceRange([0, 100]);
  }, []);

  // Memoize search handler
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  // Simple function components instead of memoized ones
  function FilterContent() {
    return (
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-base font-semibold mb-4">Filter Products</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Groups */}
        <div className="space-y-4">
          {Object.entries(groupedFeatures).map(([group, features]) => (
            <div key={group}>
              <Select
                onValueChange={(value) => {
                  if (value && !selectedFeatures.includes(value)) {
                    setSelectedFeatures([...selectedFeatures, value]);
                  }
                }}
              >
                <SelectTrigger className="w-full bg-muted/50">
                  <SelectValue placeholder={`Select ${group}`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="capitalize">{group}</SelectLabel>
                    {features.map((feature) => (
                      <SelectItem
                        key={feature}
                        value={feature}
                        disabled={selectedFeatures.includes(feature)}
                      >
                        {feature}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Price Range
          </h3>
          <div className="px-1">
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              minStepsBetweenThumbs={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-6"
              thumbClassName="h-3.5 w-3.5 border-2 border-primary bg-background"
              trackClassName="h-1 bg-primary/20"
              rangeClassName="bg-primary"
            />
            <div className="flex items-center justify-between mt-2">
              <div className="bg-muted px-3 py-1.5 rounded-lg">
                <span className="text-sm font-medium">₹{priceRange[0]}K</span>
              </div>
              <div className="bg-muted px-3 py-1.5 rounded-lg">
                <span className="text-sm font-medium">₹{priceRange[1]}K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedFeatures.length > 0 || selectedCategory !== "all" || priceRange[0] !== 0 || priceRange[1] !== 100) && (
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">Active Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Reset All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "all" && (
                <div className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                  {categories.find(c => c.id === selectedCategory)?.label}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 p-0 hover:bg-transparent"
                    onClick={() => setSelectedCategory("all")}
                  >
                    <LucideX className="h-3 w-3" />
                  </Button>
                </div>
              )}
              {selectedFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg flex items-center gap-2"
                >
                  {feature}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 p-0 hover:bg-transparent"
                    onClick={() => setSelectedFeatures(prev => prev.filter(f => f !== feature))}
                  >
                    <LucideX className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  function ProductCard({ product }: { product: typeof products[0] }) {
    return (
      <div className="group h-full">
        <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden h-full flex flex-col">
          {/* Product Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
              <Button
                variant="secondary"
                size="sm"
                className="shadow-lg"
              >
                View Details
                <LucideEye className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-full text-xs font-medium z-20 shadow-sm">
              {product.category}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>
              {/* Features Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t mt-auto">
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                {product.price}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
              >
                <LucideArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section - Simplified animation */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Our <span className="text-primary font-normal">Products</span>
            </h1>
            <div className="h-1 w-20 bg-primary rounded mx-auto" />
            <p className="text-muted-foreground text-lg">
              Discover our range of high-quality bandsaw machines
            </p>
          </div>
        </Container>
      </section>

      <Container className="pb-20">
        {/* Search Bar and Filter Button Row */}
        <div className="flex gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="relative bg-background/50 backdrop-blur-sm rounded-xl border overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-md">
              <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setSearchQuery("")}
                >
                  <LucideX className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Filter Button */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden shrink-0 gap-2 h-[40px] px-4"
              >
                <LucideFilter className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-96">
              <SheetTitle className="text-left">Filters</SheetTitle>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-80 shrink-0 sticky top-24 h-fit">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl border p-6">
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
