// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from "react-router";

import useProduct from "@/shop/hooks/useProduct";
import AdminProductForm from "./ui/AdminProductForm";

import LoadingPlaceholder from "@/components/shared/LoadingPlaceholder";

const AdminProductPage = function () {
  const { id } = useParams();

  const {
    queryResult: { isLoading, isError, data: product },
    handleSubmitProductForm,
  } = useProduct(id || "");

  const formTitle = id === "new" ? "Nuevo producto" : "Editar producto";
  const formSubtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  if (isError) {
    return <Navigate to="/admin/products" />;
  }
  if (isLoading) {
    return <LoadingPlaceholder />;
  }
  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <AdminProductForm
      title={formTitle}
      subtitle={formSubtitle}
      product={product}
      onSubmit={handleSubmitProductForm}
    />
  );
};

export default AdminProductPage;
