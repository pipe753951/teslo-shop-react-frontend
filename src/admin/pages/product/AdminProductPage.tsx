// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from "react-router";

import { Loader2 } from "lucide-react";

import useProduct from "@/shop/hooks/useProduct";
import AdminProductForm from "./ui/AdminProductForm";

const AdminProductPage = function () {
  const { id } = useParams();

  const { isLoading, isError, data: product } = useProduct(id || "");

  const formTitle = id === "new" ? "Nuevo producto" : "Editar producto";
  const formSubtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  if (isError) {
    return <Navigate to="/admin/products" />;
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader2 className="size-12 animate-spin" />
      </div>
    );
  }
  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <AdminProductForm
      title={formTitle}
      subtitle={formSubtitle}
      product={product}
    />
  );
};

export default AdminProductPage;
