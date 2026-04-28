import { queryOptions, useQuery } from "@tanstack/react-query";

import getProducts from "../actions/get-products.action";

const useProducts = function () {
  // TODO: Viene lógica.

  return useQuery(
    queryOptions({
      queryKey: ["products"],
      queryFn: getProducts,
    }),
  );
};

export default useProducts;
