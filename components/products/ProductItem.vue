<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">
      <nuxt-link :href="`/product-details/${item.ID}`" class="w-img">
        <img :src="`http://localhost:7777/${item.ImageURL}`" alt="product-img" />
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

defineProps<{ item: ProductType }>();

async function cartButtonHandler(product: ProductType) {
  const productAlreadyInCart = globalUserState.value.CartItems.some((item) => item.ProductID == product.ID);
  if (productAlreadyInCart) {
    updateCartItemQuantity(product);
  } else {
    addCartItem(product);
  }
}

async function addCartItem(product: ProductType) {
  const res = await addCartItemAPI({ ProductID: product.ID, Quantity: 1, UnitPrice: product.Price });
  console.log('🚀 ~ addCartItem ~ res:', res);
  await setGlobalUserState();
}

async function updateCartItemQuantity(product: ProductType) {
  const cartItem = globalUserState.value.CartItems.find((item) => item.ProductID == product.ID);
  const res = await updateCartItemQuantityAPI({ cartItemId: cartItem?.ID!, Quantity: cartItem?.Quantity! + 1 });
  console.log('🚀 ~ updateCartItemQuantity ~ res:', res);
  await setGlobalUserState();
}
</script>
