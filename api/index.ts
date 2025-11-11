import type { ProductType, User } from '../types/productType';

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

export async function getProductAPI(productId: number): Promise<ProductType> {
  return await $fetch(`/api/products/${productId}`);
}

export async function addProductToCartAPI() {
  return await $fetch(`/api/cart/items`, { method: 'POST' });
}

export async function loginAPI(payload: { Email: string; Password: string }): Promise<User> {
  return await $fetch(`/api/login`, { method: 'POST', body: payload });
}

export async function logoutAPI(): Promise<User> {
  return await $fetch(`/api/logout`, { method: 'POST' });
}

export async function addCartItemAPI(payload: { ProductID: number; Quantity: number; UnitPrice: number }) {
  return await $fetch(`/api/cart/items`, { method: 'POST', body: payload });
}

export async function deleteCartItemAPI(cartItemId: number) {
  return await $fetch(`/api/cart/items/${cartItemId}`, { method: 'DELETE' });
}

export async function getUserAPI(): Promise<User> {
  return await $fetch(`/api/me`);
}
