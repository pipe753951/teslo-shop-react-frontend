import { useParams } from "react-router";

import { productsMock } from "@/mocks/products.mock";

import usePageNumberQuery from "@/shop/hooks/usePageNumberQuery";

import AppPagination from "@/components/shared/AppPagination";
import ProductsGrid from "@/shop/components/ProductsGrid";
import ShopJumbotron from "@/shop/components/ShopJumbotron";

const ProductsByGenderPage = function () {
  const [currentPage, setCurrentPage] = usePageNumberQuery();
  const { gender } = useParams();

  const genderLabels = {
    men: "hombres",
    women: "mujeres",
    kids: "niños",
  };

  const handleUpdatePage = setCurrentPage;

  return (
    <>
      <ShopJumbotron title={`Productos para ${genderLabels[gender]}`} />
      <ProductsGrid products={productsMock} />
      <AppPagination
        totalPages={5}
        currentPage={currentPage}
        onUpdatePage={handleUpdatePage}
      />
    </>
  );
};

export default ProductsByGenderPage;
