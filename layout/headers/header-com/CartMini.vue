<template>
  <div class="mini-cart">
    <div v-if="cartItems.length === 0">
      <h5>你的購物車是空的</h5>
    </div>
    <div v-if="cartItems.length > 0" class="mini-cart-inner">
      <ul
        :class="`mini-cart-list ${
          cartItems.length === 1 ? 'slider-height_1' : cartItems.length === 2 ? 'slider-height_2' : 'slider-height'
        }`"
      >
        <li v-for="(item, i) in cartItems" :key="i">
          <div class="cart-img f-left">
            <nuxt-link :href="`/product-details/${item.ID}`">
              <img :src="`http://localhost:7777/${item.Product.ImageURL}`" alt="" />
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
          <div class="del-icon f-right mt-30">
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
</template>

<script setup lang="ts">
import type { CartItem } from '../../../types/productType';

const props = defineProps<{ cartItems: CartItem[] }>();
const total = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + item.UnitPrice * item.Quantity, 0);
});
</script>
