import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AdminPagePresentation from "@/admin/components/AdminPagePresentation";
import AppPagination from "@/components/shared/AppPagination";
import usePageNumberQuery from "@/shop/hooks/usePageNumberQuery";
import { PlusIcon } from "lucide-react";

const AdminProductsPage = function () {
  const [currentPage, setCurrentPage] = usePageNumberQuery();

  const handleUpdatePage = setCurrentPage;

  return (
    <div className="p-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <AdminPagePresentation
            title="Tu lista de productos"
            subtitle="Aquí podrás administrar tus productos que tus clientes podrán comprar en Teslo Shop."
          />
        </div>
        <Link to="/admin/products/new">
          <Button>
            <PlusIcon />
            <span>Nuevo producto</span>
          </Button>
        </Link>
      </div>

      <Table className="mb-10 p-10 bg-background shadow-xs border border-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="Product"
                className="size-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Categoría 1</TableCell>
            <TableCell>100 unidades</TableCell>
            <TableCell>XS, S, L</TableCell>
            <TableCell className="text-right">
              <Link to={"/admin/products/123456"}>
                <Button>Editar</Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <AppPagination
        totalPages={5}
        currentPage={currentPage}
        onUpdatePage={handleUpdatePage}
      />
    </div>
  );
};

export default AdminProductsPage;
