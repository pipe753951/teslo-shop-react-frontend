import { TESLO_API_BASE_URL, tesloApi } from "@/api/tesloApi";

import type { Product } from "@/types/interfaces/product.interface";

interface GetProductByIdOrSlugOptions {
  allowNewProduct?: boolean;
}

const getProductByIdOrSlug = async function (
  idOrSlug: string,
  { allowNewProduct }: GetProductByIdOrSlugOptions,
): Promise<Product> {
  if (!idOrSlug) {
    throw new Error(
      "ID or Slug isn't specified. Please specify it when you want to call this function.",
    );
  }

  if (idOrSlug === "new" && allowNewProduct) {
    return {
      id: "new",
      title: "",
      price: 0,
      description: "",
      slug: "",
      stock: 1,
      sizes: [],
      gender: "women",
      tags: [],
      images: [],
    };
  }

  const { data: responseData } = await tesloApi.get<Product>(
    `/products/${idOrSlug}`,
  );

  const mappedImages = responseData.images.map(
    (image) => `${TESLO_API_BASE_URL}/files/product/${image}`,
  );

  return { ...responseData, images: [...mappedImages] };
};

export default getProductByIdOrSlug;
