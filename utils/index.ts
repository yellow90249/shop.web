export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

import { type ProductType } from '../types/productType';
import { addCartItemAPI, updateCartItemQuantityAPI } from '../api';
import { globalUserState, setGlobalUserState } from '../store/globalState';
import { toast } from 'vue3-toastify';

export async function cartButtonHandler(product: ProductType) {
  if (!localStorage.getItem('token')) {
    toast.error('請先登入');
    return;
  }
  const productAlreadyInCart = globalUserState.value.CartItems.some((item) => item.ProductID == product.ID);
  if (productAlreadyInCart) {
    const res = await updateCartItemQuantity(product);
    if (res != 'success') {
      toast.error('請先登入');
      return;
    }
  } else {
    const res = await addCartItem(product);
    if (res != 'success') {
      toast.error('請先登入');
      return;
    }
  }
  toast.success('加入購物車');
}

async function addCartItem(product: ProductType): Promise<any> {
  try {
    const res = await addCartItemAPI({ ProductID: product.ID, Quantity: 1, UnitPrice: product.Price });
    console.log('🚀 ~ addCartItem ~ res:', res);
    await setGlobalUserState();
    return res;
  } catch (err) {
    console.log('🚀 ~ addCartItem ~ err:', err);
    return err;
  }
}

async function updateCartItemQuantity(product: ProductType): Promise<any> {
  const cartItem = globalUserState.value.CartItems.find((item) => item.ProductID == product.ID);
  const res = await updateCartItemQuantityAPI({ cartItemId: cartItem?.ID!, Quantity: cartItem?.Quantity! + 1 });
  await setGlobalUserState();
  return res;
}
