import { TESLO_API_BASE_URL, tesloApi } from "@/api/tesloApi";
import type { Product } from "@/types/interfaces/product.interface";
import type { FileUploadResponse } from "@/types/interfaces/responses/file-upload.response";

const uploadImageFiles = async function (files: File[]) {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await tesloApi<FileUploadResponse>({
      url: "/files/product",
      method: "POST",
      data: formData,
    });

    return data.fileName;
  });

  const uploadedFileNames = await Promise.all(uploadPromises);
  return uploadedFileNames;
};

const createOrUpdateProduct = async function (
  productLike: Partial<Product> & { imageFiles?: File[] },
): Promise<Product> {
  const {
    id,
    images: prevImages = [],
    imageFiles = [],
    ...restProductLikeProperties
  } = productLike;
  delete restProductLikeProperties.user;

  const isCreatingProduct = id === "new";
  const imagesToSet = prevImages.map((image) => {
    if (image.includes("http")) return image.split("/").pop() || "";
    return image;
  });

  restProductLikeProperties.stock = Number(restProductLikeProperties.stock);
  restProductLikeProperties.price = Number(restProductLikeProperties.price);

  // Preparar las imágenes
  if (imageFiles.length > 0) {
    const addedFileImageNames = await uploadImageFiles(imageFiles);
    imagesToSet.push(...addedFileImageNames);
  }

  if (isNaN(restProductLikeProperties.stock))
    restProductLikeProperties.stock = 0;
  if (isNaN(restProductLikeProperties.price))
    restProductLikeProperties.price = 0;

  const { data: productData } = await tesloApi<Product>({
    url: isCreatingProduct ? "/products" : `/products/${id}`,
    method: isCreatingProduct ? "POST" : "PATCH",
    data: {
      ...restProductLikeProperties,
      images: imagesToSet,
    } as Partial<Product>,
  });

  console.debug(imagesToSet);

  return {
    ...productData,
    images: imagesToSet.map((image) => {
      console.debug(image.startsWith("http"));
      if (image.startsWith("http")) return image;
      return `${TESLO_API_BASE_URL}/files/product/${image}`;
    }),
  };
};

export default createOrUpdateProduct;
