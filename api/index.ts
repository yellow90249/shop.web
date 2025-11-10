export async function getCategoryListAPI(): Promise<{ List: any; Total: any }> {
  return await $fetch('/api/categories?currentPage=-1&perPage=-1&name=');
}

export async function getProductListAPI(payload: {
  currentPage: number;
  perPage: number;
  name: string;
  categoryId: number;
}): Promise<{ List: any; Total: any }> {
  return await $fetch(
    `/api/products?currentPage=${payload.currentPage}&perPage=${payload.perPage}&name=${payload.name}&categoryId=${payload.categoryId}`
  );
}
