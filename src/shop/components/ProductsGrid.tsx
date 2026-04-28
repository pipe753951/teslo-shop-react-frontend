import { useState } from "react";
import { useSearchParams } from "react-router";

import { Filter, Grid, List } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { Product } from "@/types/interfaces/product.interface";

import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";

type ViewMode = "grid" | "list";

interface Props {
  products?: Product[];
}

const ProductsGrid = function ({ products = [] }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const viewMode: ViewMode =
    (searchParams.get("view-mode") as ViewMode) || "grid";

  const handleChangeViewMode = (newViewMode: ViewMode) => {
    setSearchParams(
      (prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        newSearchParams.set("view-mode", newViewMode);
        return newSearchParams;
      },
      { replace: true },
    );
  };

  return (
    <section className="py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-light">Productos</h2>
            <span className="text-muted-foreground">
              ({products.length} productos)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>

            <div className="hidden md:flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "transparent"}
                size="sm"
                onClick={() => handleChangeViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "transparent"}
                size="sm"
                onClick={() => handleChangeViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 flex items-end bg-primary/70 p-4 lg:hidden">
              <div className="flex flex-col w-full bg-background rounded-4xl pb-6">
                <div className="flex items-center justify-between px-6 py-3 mb-6">
                  <h3 className="text-lg font-semibold">Filtros</h3>
                  <Button
                    variant="transparent"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    Cerrar
                  </Button>
                </div>
                <FilterSidebar className="w-full px-6" />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
