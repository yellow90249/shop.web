import type { ProductType, User, Order } from '../types/productType';

export const apiBase = 'https://api.potatoshop.tw';
// export const apiBase = 'http://127.0.0.1:8000';
export const assetUrl = 'https://storage.googleapis.com/potato-shop';

const useApi = () => {
  return $fetch.create({
    onRequest({ request, options, error }) {
      const token = localStorage.getItem('token');
      options.headers.set('Authorization', `Bearer ${token}`);
    },
  });
};

export async function signupAPI(payload: { Name: string; Email: string; Password: string; UploadedFile: File }) {
  const api = useApi();
  const formData = new FormData();
  formData.append('Name', payload.Name);
  formData.append('Email', payload.Email);
  formData.append('Password', payload.Password);
  formData.append('UploadedFile', payload.UploadedFile);

  return await api(`${apiBase}/api/user/signup`, {
    method: 'POST',
    body: formData,
  });
}

export async function getCategoryListAPI(): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(`${apiBase}/api/categories?currentPage=-1&perPage=-1&name=`);
}

export async function getProductListAPI(payload: {
  currentPage: number;
  perPage: number;
  name: string;
  categoryId: number;
}): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(
    `${apiBase}/api/products?currentPage=${payload.currentPage}&perPage=${payload.perPage}&name=${payload.name}&categoryId=${payload.categoryId}`
  );
}

export async function getProductAPI(productId: number): Promise<ProductType> {
  const api = useApi();
  return await api(`${apiBase}/api/products/${productId}`);
}

export async function loginAPI(payload: { Email: string; Password: string }): Promise<string> {
  const api = useApi();
  return await api(`${apiBase}/api/user/login`, { method: 'POST', body: payload });
}

export async function logoutAPI(): Promise<User> {
  const api = useApi();
  return await api(`${apiBase}/api/logout`, { method: 'POST' });
}

export async function getUserAPI(): Promise<User> {
  const api = useApi();
  return await api(`${apiBase}/api/me`);
}

// 購物車
export async function addCartItemAPI(payload: { ProductID: number; Quantity: number; UnitPrice: number }) {
  const api = useApi();
  return await api(`${apiBase}/api/cart/items`, { method: 'POST', body: payload });
}

export async function updateCartItemQuantityAPI(payload: { cartItemId: number; Quantity: number }) {
  const api = useApi();
  return await api(`${apiBase}/api/cart/items/${payload.cartItemId}`, {
    method: 'PUT',
    body: { Quantity: payload.Quantity },
  });
}

export async function deleteCartItemAPI(cartItemId: number) {
  const api = useApi();
  return await api(`${apiBase}/api/cart/items/${cartItemId}`, { method: 'DELETE' });
}

export async function deleteAllCartItemAPI() {
  const api = useApi();
  return await api(`${apiBase}/api/cart/items/all`, { method: 'DELETE' });
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
  return await api(`${apiBase}/api/order`, { method: 'POST', body: payload });
}

export async function getOrderAPI(orderId: number): Promise<Order> {
  const api = useApi();
  return await api(`${apiBase}/api/orders/${orderId}`);
}

export async function getOrderListAPI(payload: {
  currentPage: number;
  perPage: number;
}): Promise<{ List: any; Total: any }> {
  const api = useApi();
  return await api(`${apiBase}/api/orders?currentPage=${payload.currentPage}&perPage=${payload.perPage}`);
}
