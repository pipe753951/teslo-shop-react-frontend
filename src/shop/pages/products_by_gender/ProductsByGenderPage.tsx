import { useParams } from "react-router";

import usePageNumberQuery from "@/shop/hooks/usePageNumberQuery";

import AppPagination from "@/components/shared/AppPagination";
import ProductsGrid from "@/shop/components/ProductsGrid";
import ShopJumbotron from "@/shop/components/ShopJumbotron";
import useProducts from "@/shop/hooks/useProducts";

const ProductsByGenderPage = function () {
  const { data } = useProducts();

  const [currentPage, setCurrentPage] = usePageNumberQuery();
  const { gender = "undefined" } = useParams();

  const genderLabels: Record<string, string> = {
    men: "hombres",
    women: "mujeres",
    kids: "niños",
  };

  const handleUpdatePage = setCurrentPage;

  return (
    <>
      <ShopJumbotron title={`Productos para ${genderLabels[gender]}`} />
      <ProductsGrid products={data?.products} />
      <AppPagination
        totalPages={data?.pages ?? 0}
        currentPage={currentPage}
        onUpdatePage={handleUpdatePage}
      />
    </>
  );
};

export default ProductsByGenderPage;
