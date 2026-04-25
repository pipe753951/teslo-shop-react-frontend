import { productsMock } from "@/mocks/products.mock";

import usePageNumber from "@/shop/hooks/usePageNumber";

import AppPagination from "@/components/shared/AppPagination";
import ProductsGrid from "@/shop/components/ProductsGrid";
import ShopJumbotron from "@/shop/components/ShopJumbotron";

const HomePage = function () {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = usePageNumber();

  const handleUpdatePage = setCurrentPage;

  return (
    <>
      <ShopJumbotron title="Todos los productos" />
      <ProductsGrid products={productsMock} />
      <AppPagination
        totalPages={5}
        currentPage={currentPage}
        onUpdatePage={handleUpdatePage}
      />
    </>
  );
};

export default HomePage;
