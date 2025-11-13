<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.ID}`">
        <img :src="`${apiBase}/${item.Product.ImageURL}`" alt="" />
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.ID}`">
        <span v-html="item.Product.Name"></span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">${{ item.UnitPrice?.toLocaleString() }}</span>
    </td>
    <td class="product-amount">
      <span class="amount">{{ item.Quantity }}</span>
    </td>
    <td class="product-subtotal">
      <span class="subtotal">${{ (item.UnitPrice * item.Quantity)?.toLocaleString() }}</span>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { OrderItem } from '../../types/productType';

defineProps<{
  item: OrderItem;
}>();

const apiBase = useRuntimeConfig().public.API_BASE;
</script>
