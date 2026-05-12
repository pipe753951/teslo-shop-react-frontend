import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationResult,
  type UseQueryResult,
} from "@tanstack/react-query";

import type { Product } from "@/types/interfaces/product.interface";

import createOrUpdateProduct from "@/admin/actions/create-or-update-product.action";
import getProductByIdOrSlug from "@/shop/actions/get-product-by-id-or-slug.action";

interface UseProductOptions {
  allowNewProduct?: boolean;
}

interface UseProductState {
  queryResult: UseQueryResult<Product, Error>;
  mutationResult: UseMutationResult<Product, Error, Partial<Product>, unknown>;
}

const useProduct = function (
  idOrSlug: string,
  { allowNewProduct }: UseProductOptions = { allowNewProduct: false },
): UseProductState {
  const queryClient = useQueryClient();

  const queryResult = useQuery(
    queryOptions({
      queryKey: ["product", { idOrSlug, allowNewProduct }],
      queryFn: () => getProductByIdOrSlug(idOrSlug, { allowNewProduct }),
      staleTime: 300000, //* 1000ms * 60s * 5m
      // enabled: Boolean(idOrSlug),
    }),
  );

  const mutationResult = useMutation({
    mutationFn: createOrUpdateProduct,
    onSuccess(productData: Product) {
      // Invalidar caché.
      queryClient.invalidateQueries(queryOptions({ queryKey: ["products"] }));
      queryClient.invalidateQueries(queryOptions({ queryKey: ["product"] }));

      // Actualizar queryData,
      const newCacheQueryOptions = queryOptions({
        queryKey: ["products", { id: productData.id }],
      });

      queryClient.setQueryData(newCacheQueryOptions.queryKey, productData);
    },
  });

  return { queryResult, mutationResult };
};

export default useProduct;
