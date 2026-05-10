import {
  queryOptions,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";

import type { Product } from "@/types/interfaces/product.interface";

import getProductByIdOrSlug from "../actions/get-product-by-id-or-slug";

const useProduct = function (idOrSlug: string): UseQueryResult<Product, Error> {
  const queryResult = useQuery(
    queryOptions({
      queryKey: ["product", { idOrSlug }],
      queryFn: () => getProductByIdOrSlug(idOrSlug),
      staleTime: 300000, //* 1000ms * 60s * 5m
      // enabled: Boolean(idOrSlug),
    }),
  );

  // TODO: Mutador

  return queryResult;
};

export default useProduct;
