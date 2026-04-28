import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { Product } from "@/types/interfaces/product.interface";

interface Props {
  product: Product;
}

const ProductCard = function ({ product }: Props) {
  return (
    <Card className="group border-0 shadow-none product-card-hover cursor-pointer p-0">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="image-overlay" />
        </div>

        <div className="pt-6 px-4 pb-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-medium text-sm tracking-tight">
              {product.title}
            </h3>
            <p className="text-xs text-muted-foreground uppercase">
              <span>{product.tags} -&#32;</span>
              <span className="font-bold">{product.sizes.join(", ")}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">${product.price}</p>
            <Button
              size="sm"
              variant="outline"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20 text-xs px-4 py-2 h-8"
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
