<template>
  <div class="mini-cart">
    <div v-if="globalUserState.ID == 0">
      <div class="checkout-link">
        <nuxt-link href="/login" class="os-btn">請先登入</nuxt-link>
      </div>
    </div>
    <div v-else>
      <div v-if="globalUserState.CartItems.length === 0">
        <h5>你的購物車是空的</h5>
      </div>
      <div v-if="globalUserState.CartItems.length > 0" class="mini-cart-inner">
        <ul
          :class="`mini-cart-list ${
            globalUserState.CartItems.length === 1
              ? 'slider-height_1'
              : globalUserState.CartItems.length === 2
              ? 'slider-height_2'
              : 'slider-height'
          }`"
        >
          <li v-for="(item, i) in globalUserState.CartItems" :key="i">
            <div class="cart-img f-left">
              <nuxt-link :href="`/product-details/${item.ID}`">
                <img :src="`${apiBase}/${item.Product.ImageURL}`" alt="" />
              </nuxt-link>
            </div>
            <div class="cart-content f-left text-left">
              <h5>
                <nuxt-link :href="`/product-details/${item.ID}`">
                  <span v-html="item.Product.Name"></span>
                </nuxt-link>
              </h5>
              <div class="cart-price">
                <span class="ammount">{{ item.Quantity }}<i class="fal fa-times"></i></span>
                <span class="price">$ {{ item.UnitPrice }}</span>
              </div>
            </div>
            <!-- remove -->
            <div class="del-icon f-right mt-30" @click="deleteCartItem(item.ID)">
              <a href="#">
                <i class="fal fa-times"></i>
              </a>
            </div>
          </li>
        </ul>
        <div class="total-price d-flex justify-content-between mb-30">
          <span>總計:</span>
          <span>${{ total?.toLocaleString() }}</span>
        </div>
        <div class="checkout-link">
          <nuxt-link href="/cart" class="os-btn">瀏覽購物車</nuxt-link>
          <nuxt-link class="os-btn os-btn-black" href="/checkout">結帳</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { deleteCartItemAPI, getApiUrl } from '../../../api';
import { globalUserState, setGlobalUserState } from '../../../store/globalState';

const apiBase = getApiUrl();
const total = computed(() => {
  return globalUserState.value.CartItems.reduce((sum, item) => sum + item.UnitPrice * item.Quantity, 0);
});

async function deleteCartItem(cartItemId: number) {
  const res = await deleteCartItemAPI(cartItemId);
  console.log('🚀 ~ deleteCartItem ~ res:', res);
  await setGlobalUserState();
}
</script>
