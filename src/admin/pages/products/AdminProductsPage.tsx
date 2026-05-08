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
import { PlusIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

const AdminProductsPage = function () {
  const [currentPage, setCurrentPage] = usePageNumberQuery();

  const handleUpdatePage = setCurrentPage;

  return (
    <div className="p-6">
      <div className="flex justify-between gap-4">
        <AdminPagePresentation
          title="Tu lista de productos"
          subtitle="Aquí podrás administrar tus productos que tus clientes podrán comprar en Teslo Shop."
        />
        <Link to="/admin/products/new">
          <Button>
            <PlusIcon />
            <span>Nuevo producto</span>
          </Button>
        </Link>
      </div>

      <form action="#" className="mb-4">
        {/* Search */}
        <div className="flex items-center gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="search" className="text-lg">
              Buscar productos
            </FieldLabel>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="search"
                name="Buscar productos"
                id="search"
                placeholder="Busca aquí..."
                className="h-11 pl-10 pr-4 py-2 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </Field>

          <Button size="lg">
            <span>Buscar</span>
          </Button>
        </div>
      </form>

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
