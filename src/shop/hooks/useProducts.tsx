import { queryOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import getProducts from "../actions/get-products.action";

const useProducts = function () {
  // TODO: Viene lógica.
  const [searchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit") || 9);
  const page = Number(searchParams.get("page") || 1);

  const offset = (page - 1) * limit;

  return useQuery(
    queryOptions({
      queryKey: ["products", { limit, offset }],
      queryFn: () =>
        getProducts({
          limit: isNaN(limit) ? 0 : limit,
          offset: isNaN(offset) ? 0 : offset,
        }),
      staleTime: 300000, //* 1000ms * 60s * 5m
    }),
  );
};

export default useProducts;
