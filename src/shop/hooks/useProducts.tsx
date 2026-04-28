import { queryOptions, useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

import getProducts from "../actions/get-products.action";

const useProducts = function () {
  // TODO: Viene lógica.
  const [searchParams] = useSearchParams();
  const { gender: genderParam } = useParams();

  const genderNames: Record<string, string> = {
    men: "men",
    women: "women",
    kids: "kid",
  };

  const limit = Number(searchParams.get("limit") || 9);
  const page = Number(searchParams.get("page") || 1);

  const sizes = searchParams.get("sizes") || undefined;

  const gender = genderParam ? genderNames[genderParam] : undefined;

  const priceParam = searchParams.get("filter");

  const offset = (page - 1) * limit;

  let minPrice: number | undefined = undefined;
  let maxPrice: number | undefined = undefined;

  switch (priceParam) {
    case "0-50":
      minPrice = 0;
      maxPrice = 50;
      break;

    case "50-100":
      minPrice = 50;
      maxPrice = 100;
      break;

    case "100-200":
      minPrice = 100;
      maxPrice = 200;
      break;

    case "200-greater":
      minPrice = 200;
      break;
  }

  return useQuery(
    queryOptions({
      queryKey: [
        "products",
        { limit, offset, sizes, gender, minPrice, maxPrice },
      ],
      queryFn: () =>
        getProducts({
          limit: isNaN(limit) ? 0 : limit,
          offset: isNaN(offset) ? 0 : offset,
          sizes,
          gender,
          minPrice,
          maxPrice,
        }),
      staleTime: 300000, //* 1000ms * 60s * 5m
    }),
  );
};

export default useProducts;
