import type { ProductType, User, Order } from '../types/productType';

export function getApiUrl() {
  return useRuntimeConfig().public.API_BASE;
}
const useApi = () => {
  return $fetch.create({
    onRequest({ request, options, error }) {
      const token = localStorage.getItem('token');
      options.headers.set('Authorization', `Bearer ${token}`);
    },
  });
};

export async function getCategoryListAPI(): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(`${getApiUrl()}/categories?currentPage=-1&perPage=-1&name=`);
}

export async function getProductListAPI(payload: {
  currentPage: number;
  perPage: number;
  name: string;
  categoryId: number;
}): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(
    `${getApiUrl()}/products?currentPage=${payload.currentPage}&perPage=${payload.perPage}&name=${
      payload.name
    }&categoryId=${payload.categoryId}`
  );
}

export async function getProductAPI(productId: number): Promise<ProductType> {
  const api = useApi();
  return await api(`${getApiUrl()}/products/${productId}`);
}

export async function loginAPI(payload: { Email: string; Password: string }): Promise<string> {
  const api = useApi();
  return await api(`${getApiUrl()}/login`, { method: 'POST', body: payload });
}

export async function logoutAPI(): Promise<User> {
  const api = useApi();
  return await api(`${getApiUrl()}/logout`, { method: 'POST' });
}

export async function getUserAPI(): Promise<User> {
  const api = useApi();
  return await api(`${getApiUrl()}/me`);
}

// 購物車
export async function addCartItemAPI(payload: { ProductID: number; Quantity: number; UnitPrice: number }) {
  const api = useApi();
  return await api(`${getApiUrl()}/cart/items`, { method: 'POST', body: payload });
}

export async function updateCartItemQuantityAPI(payload: { cartItemId: number; Quantity: number }) {
  const api = useApi();
  return await api(`${getApiUrl()}/cart/items/${payload.cartItemId}`, {
    method: 'PUT',
    body: { Quantity: payload.Quantity },
  });
}

export async function deleteCartItemAPI(cartItemId: number) {
  const api = useApi();
  return await api(`${getApiUrl()}/cart/items/${cartItemId}`, { method: 'DELETE' });
}

export async function deleteAllCartItemAPI() {
  const api = useApi();
  return await api(`${getApiUrl()}/cart/items/all`, { method: 'DELETE' });
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
  const api = useApi();
  return await api(`${getApiUrl()}/order`, { method: 'POST', body: payload });
}

export async function getOrderAPI(orderId: number): Promise<Order> {
  const api = useApi();
  return await api(`${getApiUrl()}/orders/${orderId}`);
}

export async function getOrderListAPI(payload: {
  currentPage: number;
  perPage: number;
}): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(`${getApiUrl()}/orders?currentPage=${payload.currentPage}&perPage=${payload.perPage}`);
}
