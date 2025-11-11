<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.ID}`">
        <img :src="`http://localhost:7777/${item.Product.ImageURL}`" alt="" />
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.ID}`">
        <span v-html="item.Product.Name"></span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">${{ item.Product.Price?.toLocaleString() }}</span>
    </td>
    <td class="product-quantity">
      <div class="cart-plus-minus">
        <input type="text" v-model="item.Quantity" />
        <div @click="state.quantityDecrement(item)" class="dec qtybutton">-</div>
        <div @click="state.add_cart_product(item)" class="inc qtybutton">+</div>
      </div>
    </td>
    <td class="product-subtotal">
      <span class="amount">${{ (item.Product.Price * item.Quantity)?.toLocaleString() }}</span>
    </td>
    <td class="product-remove" @click.prevent="state.remover_cart_products(item)">
      <a href="#">
        <i class="fa fa-times"></i>
      </a>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { CartItem } from '../../types/productType';
import { useCartStore } from '../../store/useCart';

defineProps<{
  item: CartItem;
}>();

const state = useCartStore();
</script>
