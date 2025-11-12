import type { ProductType, User, Order } from '../types/productType';

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

export async function loginAPI(payload: { Email: string; Password: string }): Promise<User> {
  return await $fetch(`/api/login`, { method: 'POST', body: payload });
}

export async function logoutAPI(): Promise<User> {
  return await $fetch(`/api/logout`, { method: 'POST' });
}

export async function getUserAPI(): Promise<User> {
  return await $fetch(`/api/me`);
}

// 購物車
export async function addCartItemAPI(payload: { ProductID: number; Quantity: number; UnitPrice: number }) {
  return await $fetch(`/api/cart/items`, { method: 'POST', body: payload });
}

export async function updateCartItemQuantityAPI(payload: { cartItemId: number; Quantity: number }) {
  return await $fetch(`/api/cart/items/${payload.cartItemId}`, {
    method: 'PUT',
    body: { Quantity: payload.Quantity },
  });
}

export async function deleteCartItemAPI(cartItemId: number) {
  return await $fetch(`/api/cart/items/${cartItemId}`, { method: 'DELETE' });
}

// 訂單
export async function createOrderAPI(payload: {
  RecipientName: string;
  RecipientPhone: string;
  RecipientEmail: string;
  RecipientAddress: string;
  TotalAmount: number;
  PaymentMethod: string;
}) {
  return await $fetch(`/api/order`, { method: 'POST', body: payload });
}

export async function getOrderAPI(orderId: number): Promise<Order> {
  return await $fetch(`/api/orders/${orderId}`);
}

export async function getOrderListAPI(payload: {
  currentPage: number;
  perPage: number;
}): Promise<{ List: any; Total: any }> {
  return await $fetch(`/api/orders?currentPage=${payload.currentPage}&perPage=${payload.perPage}`);
}
