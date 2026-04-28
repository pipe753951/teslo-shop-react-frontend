import { productsMock } from "@/mocks/products.mock";

import useProducts from "@/shop/hooks/useProducts";
import usePageNumberQuery from "@/shop/hooks/usePageNumberQuery";

import AppPagination from "@/components/shared/AppPagination";
import ProductsGrid from "@/shop/components/ProductsGrid";
import ShopJumbotron from "@/shop/components/ShopJumbotron";

const HomePage = function () {
  const { data } = useProducts();

  const [currentPage, setCurrentPage] = usePageNumberQuery();

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
