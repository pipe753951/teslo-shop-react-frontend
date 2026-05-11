import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductTableRow from "@/admin/components/ProductTableRow";

import type { Product } from "@/types/interfaces/product.interface";

interface ProductTableProps extends ComponentProps<typeof Table> {
  products: Product[];
}

const ProductTable = function ({
  products,
  className,
  ...props
}: ProductTableProps) {
  return (
    <Table
      className={cn("w-full min-w-200 bg-background", className)}
      {...props}
    >
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead>Imagen</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Inventario</TableHead>
          <TableHead>Tallas</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <ProductTableRow key={product.id} product={product} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
