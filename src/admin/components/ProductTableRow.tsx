import { Link } from "react-router";

import { LinkIcon, PencilIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";

import type { Product } from "@/types/interfaces/product.interface";

import formatCurrency from "@/lib/app_helpers/formatCurrency.formatter";
import getGenderTranslation from "@/lib/app_helpers/getGenderTranslation";

interface Props {
  product: Product;
}

const ProductTableRow = function ({ product }: Props) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={product.images[0]}
          alt={product.title}
          className="size-20 object-cover rounded-md"
        />
      </TableCell>
      <TableCell>
        <Link
          to={`/admin/products/${product.id}`}
          className="underline inline-flex items-center gap-2"
        >
          {product.title}{" "}
          <span>
            <LinkIcon className="size-4" />
          </span>
        </Link>
      </TableCell>
      <TableCell>{formatCurrency(product.price)}</TableCell>
      <TableCell>{getGenderTranslation(product.gender)}</TableCell>
      <TableCell>{`product.stock ${product.stock !== 1 ? "unidad" : "unidades"}`}</TableCell>
      <TableCell>{product.sizes.join(", ")}</TableCell>
      <TableCell className="text-right">
        <Link to={`/admin/products/${product.id}`} tabIndex={-1}>
          <Button
            size={"icon-lg"}
            className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
            aria-label="Editar"
          >
            <PencilIcon className="size-5" />
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
