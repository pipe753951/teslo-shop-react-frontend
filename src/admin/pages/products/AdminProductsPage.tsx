import { Link, useSearchParams } from "react-router";

import { PlusIcon, Search } from "lucide-react";

import AppPagination from "@/components/shared/AppPagination";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import useProducts from "@/shop/hooks/useProducts";
import usePageNumberQuery from "@/shop/hooks/usePageNumberQuery";

import AdminPagePresentation from "@/admin/components/AdminPagePresentation";
import ProductTable from "@/admin/components/ProductTable";

const AdminProductsPage = function () {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: productsData } = useProducts();

  const [currentPage, setCurrentPage] = usePageNumberQuery();

  const currentQueryParam = searchParams.get("query") || undefined;

  const handleSearchFormSubmit = (formData: FormData) => {
    const searchQuery: string | undefined = formData.get("search")?.toString();
    console.debug(searchQuery);

    if (!searchQuery && !currentQueryParam) return;

    const newSearchParams = new URLSearchParams();
    if (searchQuery) {
      newSearchParams.set("query", searchQuery);
    } else {
      newSearchParams.delete("query");
    }

    setSearchParams(newSearchParams);
  };

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

      <form action={handleSearchFormSubmit} className="mb-4">
        {/* Search */}
        <div className="flex items-center gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="search" className="text-lg">
              Buscar
            </FieldLabel>
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="search"
                defaultValue={currentQueryParam}
                name="search"
                id="search"
                placeholder="Busca aquí..."
                className="h-11 pl-10 w-full bg-background"
              />
            </div>
          </Field>

          <Button type="submit" size="lg">
            <span>Buscar</span>
          </Button>
        </div>
      </form>

      {productsData ? (
        <ProductTable products={productsData?.products} className="mb-5" />
      ) : (
        <p>Cargando...</p>
      )}

      <AppPagination
        totalPages={5}
        currentPage={currentPage}
        onUpdatePage={handleUpdatePage}
      />
    </div>
  );
};

export default AdminProductsPage;
