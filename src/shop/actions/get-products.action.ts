import { tesloApi, TESLO_API_BASE_URL } from "@/api/tesloApi";

import type { Product } from "@/types/interfaces/product.interface";
import type { ProductsResponse } from "@/types/interfaces/responses/products.response";

export const getProducts = async function (): Promise<ProductsResponse> {
  const { data } = await tesloApi.get<ProductsResponse>("/products");

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
