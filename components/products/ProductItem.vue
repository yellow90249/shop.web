<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">
      <nuxt-link :href="`/product-details/${item.ID}`" class="w-img">
        <img :src="`${apiBase}/${item.ImageURL}`" alt="product-img" />
      </nuxt-link>
    </div>
    <div class="product__content p-relative">
      <div class="product__content-inner">
        <nuxt-link :href="`/product-details/${item.ID}`">
          <span v-html="item.Name"></span>
        </nuxt-link>
        <div class="product__price transition-3">
          <span>${{ item.Price?.toLocaleString() }}</span>
        </div>
      </div>
      <div class="add-cart p-absolute transition-3">
        <a @click.prevent="cartButtonHandler(item)" style="cursor: pointer">+ 加入購物車</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProductType } from '../../types/productType';
import { addCartItemAPI, updateCartItemQuantityAPI } from '../../api';
import { globalUserState, setGlobalUserState } from '../../store/globalState';
import { toast } from 'vue3-toastify';
import { cartButtonHandler } from '../../utils';

defineProps<{ item: ProductType }>();

const apiBase = useRuntimeConfig().public.API_BASE;

// async function cartButtonHandler(product: ProductType) {
//   const productAlreadyInCart = globalUserState.value.CartItems.some((item) => item.ProductID == product.ID);
//   console.log('🚀 ~ cartButtonHandler ~ productAlreadyInCart:', productAlreadyInCart);
//   if (productAlreadyInCart) {
//     const res = await updateCartItemQuantity(product);
//     if (res.Message != 'success') {
//       toast.error('請先登入');
//       return;
//     }
//   } else {
//     const res = await addCartItem(product);
//     if (res != 'success') {
//       toast.error('請先登入');
//       return;
//     }
//   }
//   toast.success('加入購物車');
// }

// async function addCartItem(product: ProductType): Promise<any> {
//   const res = await addCartItemAPI({ ProductID: product.ID, Quantity: 1, UnitPrice: product.Price });
//   await setGlobalUserState();
//   return res;
// }

// async function updateCartItemQuantity(product: ProductType): Promise<any> {
//   const cartItem = globalUserState.value.CartItems.find((item) => item.ProductID == product.ID);
//   const res = await updateCartItemQuantityAPI({ cartItemId: cartItem?.ID!, Quantity: cartItem?.Quantity! + 1 });
//   await setGlobalUserState();
//   return res;
// }
</script>
