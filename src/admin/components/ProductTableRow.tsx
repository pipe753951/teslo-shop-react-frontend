import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";

import type { Product } from "@/types/interfaces/product.interface";

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
      <TableCell>{product.title}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{getGenderTranslation(product.gender)}</TableCell>
      <TableCell>{`product.stock ${product.stock !== 1 ? "unidad" : "unidades"}`}</TableCell>
      <TableCell>{product.sizes.join(", ")}</TableCell>
      <TableCell className="text-right">
        <Link to={`/admin/products/${product.id}`}>
          <Button>Editar</Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
