import { queryOptions, useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

import getProducts from "../actions/get-products.action";

const useProducts = function () {
  // TODO: Viene lógica.
  const [searchParams] = useSearchParams();
  const { genderParam } = useParams();

  const genderNames: Record<string, string> = {
    men: "men",
    women: "women",
    kids: "kid",
  };

  const limit = Number(searchParams.get("limit") || 9);
  const page = Number(searchParams.get("page") || 1);

  const sizes = searchParams.get("sizes") || undefined;

  const gender = genderParam ? genderNames[genderParam] : undefined;

  const offset = (page - 1) * limit;

  return useQuery(
    queryOptions({
      queryKey: ["products", { limit, offset, sizes, gender }],
      queryFn: () =>
        getProducts({
          limit: isNaN(limit) ? 0 : limit,
          offset: isNaN(offset) ? 0 : offset,
          sizes,
          gender,
        }),
      staleTime: 300000, //* 1000ms * 60s * 5m
    }),
  );
};

export default useProducts;
