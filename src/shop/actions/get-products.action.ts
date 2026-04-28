import { tesloApi } from "@/api/tesloApi";

import type { ProductsResponse } from "@/types/interfaces/responses/products.response";

export const getProducts = async function (): Promise<ProductsResponse> {
  const { data } = await tesloApi.get<ProductsResponse>("/products");

  console.debug({ data });
  return data;
};

export default getProducts;
