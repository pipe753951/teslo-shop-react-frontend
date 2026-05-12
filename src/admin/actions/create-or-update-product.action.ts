import { TESLO_API_BASE_URL, tesloApi } from "@/api/tesloApi";
import type { Product } from "@/types/interfaces/product.interface";

const createOrUpdateProduct = async function (
  productLike: Partial<Product> & { imageFiles?: File[] },
): Promise<Product> {
  const {
    id,
    images = [],
    imageFiles = [],
    ...restProductLikeProperties
  } = productLike;
  delete restProductLikeProperties.user;

  const isCreatingProduct = id === "new";

  restProductLikeProperties.stock = Number(restProductLikeProperties.stock);
  restProductLikeProperties.price = Number(restProductLikeProperties.price);

  if (isNaN(restProductLikeProperties.stock))
    restProductLikeProperties.stock = 0;
  if (isNaN(restProductLikeProperties.price))
    restProductLikeProperties.price = 0;

  const { data: productData } = await tesloApi<Product>({
    url: isCreatingProduct ? "/products" : `/products/${id}`,
    method: isCreatingProduct ? "POST" : "PATCH",
    data: restProductLikeProperties,
  });

  return {
    ...productData,
    images: productData.images.map((image) => {
      if (image.startsWith("http")) return image;
      return `${TESLO_API_BASE_URL}/files/product/${image}`;
    }),
  };
};

export default createOrUpdateProduct;
