import {
  queryOptions,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";

import type { Product } from "@/types/interfaces/product.interface";

import getProductByIdOrSlug from "../actions/get-product-by-id-or-slug";

interface useProductState {
  queryResult: UseQueryResult<Product, Error>;
  handleSubmitProductForm(productLike: Partial<Product>): Promise<void>;
}

const useProduct = function (idOrSlug: string): useProductState {
  const queryResult = useQuery(
    queryOptions({
      queryKey: ["product", { idOrSlug }],
      queryFn: () => getProductByIdOrSlug(idOrSlug),
      staleTime: 300000, //* 1000ms * 60s * 5m
      // enabled: Boolean(idOrSlug),
    }),
  );

  // TODO: Mutador

  const handleSubmitProductForm = async (productLike: Partial<Product>) => {
    console.debug(productLike);
  };

  return { queryResult, handleSubmitProductForm };
};

export default useProduct;
