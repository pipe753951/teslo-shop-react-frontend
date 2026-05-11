// Code based on: https://github.com/Klerith/bolt-product-editor

import { Navigate, useNavigate, useParams } from "react-router";

import { toast } from "sonner";

import type { Product } from "@/types/interfaces/product.interface";

import useProduct from "@/shop/hooks/useProduct";

import AdminProductForm from "./ui/AdminProductForm";
import LoadingPlaceholder from "@/components/shared/LoadingPlaceholder";

const AdminProductPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    queryResult: { isLoading, isError, data: product },
    mutationResult,
  } = useProduct(id || "", { allowNewProduct: true });

  const isCreatingProduct = product?.id === "new";

  const formTitle = id === "new" ? "Nuevo producto" : "Editar producto";
  const formSubtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  const handleSubmitProductForm = async (productLike: Partial<Product>) => {
    if (mutationResult.isPending) return;

    await mutationResult.mutateAsync(productLike, {
      onSuccess(productMutationResultData) {
        toast.success(
          `El producto se ${isCreatingProduct ? "creó" : "actualizó"} exitosamente.`,
        );
        if (!isCreatingProduct) return;
        navigate(`/admin/products/${productMutationResultData.id}`);
      },
      onError(error) {
        console.error(
          `Something was unexpected when submitting a product:`,
          error,
        );
        toast.error("Hubo un error al actualizar un producto");
      },
    });
  };

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
      isSubmitting={mutationResult.isPending}
      onSubmit={handleSubmitProductForm}
    />
  );
};

export default AdminProductPage;
