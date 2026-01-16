<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${cartItem.ID}`">
        <img :src="`${assetUrl}/${cartItem.Product.ImageURL}`" alt="" />
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${cartItem.ID}`">
        <span v-html="cartItem.Product.Name"></span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">${{ cartItem.Product.Price?.toLocaleString() }}</span>
    </td>
    <td class="product-quantity">
      <div class="cart-plus-minus">
        <input type="text" v-model="cartItem.Quantity" />
        <div class="dec qtybutton" @click="decreaseAmountHandler">-</div>
        <div class="inc qtybutton" @click="increaseAmountHandler">+</div>
      </div>
    </td>
    <td class="product-subtotal">
      <span class="amount">${{ (cartItem.Product.Price * cartItem.Quantity)?.toLocaleString() }}</span>
    </td>
    <td class="product-remove">
      <div @click="deleteCartItem(cartItem.ID)" style="cursor: pointer">
        <i class="fa fa-times"></i>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { CartItem } from '../../types/productType';
import { updateCartItemQuantityAPI, deleteCartItemAPI, assetUrl } from '../../api';
import { setGlobalUserState } from '../../store/globalState';

const props = defineProps<{
  cartItem: CartItem;
}>();

async function decreaseAmountHandler() {
  if (props.cartItem.Quantity > 1) {
    await updateCartItemQuantityAPI({ cartItemId: props.cartItem.ID, Quantity: Number(props.cartItem.Quantity) - 1 });
    await setGlobalUserState();
  }
}

async function increaseAmountHandler() {
  await updateCartItemQuantityAPI({ cartItemId: props.cartItem.ID, Quantity: Number(props.cartItem.Quantity) + 1 });
  await setGlobalUserState();
}

async function deleteCartItem(cartItemId: number) {
  const res = await deleteCartItemAPI(cartItemId);
  console.log('🚀 ~ deleteCartItem ~ res:', res);
  await setGlobalUserState();
}
</script>
