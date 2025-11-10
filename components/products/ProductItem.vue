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
        <a @click.prevent="store.add_cart_product(item)" href="#">+ Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProductType } from '../../types/productType';
import { useCartStore } from '../../store/useCart';

defineProps<{
  item: ProductType;
}>();
const store = useCartStore();
</script>
