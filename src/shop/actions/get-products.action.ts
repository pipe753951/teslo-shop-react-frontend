import { tesloApi, TESLO_API_BASE_URL } from "@/api/tesloApi";

import type { Product } from "@/types/interfaces/product.interface";
import type { ProductsResponse } from "@/types/interfaces/responses/products.response";

interface Options {
  limit?: number | string;
  offset?: number | string;
}

export const getProducts = async function (
  options: Options = {},
): Promise<ProductsResponse> {
  const { limit, offset } = options;

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: {
      limit,
      offset,
    },
  });

  const productsWithImageURLs: Product[] = data.products.map((product) => ({
    ...product,
    images: product.images.map(
      (image) => `${TESLO_API_BASE_URL}/files/product/${image}`,
    ),
  }));

  return {
    ...data,
    products: productsWithImageURLs,
  };
};

export default getProducts;
