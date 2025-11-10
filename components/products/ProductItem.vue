<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">
      <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
        <img :src="item.img" alt="product-img" />
      </nuxt-link>

      <div v-if="item.sale_of_per || item.new" class="product__sale">
        <span v-if="item.new || item.sale_of_per" class="new">new</span>
        <span v-if="item.sale_of_per" class="percent">-{{ item.sale_of_per }}%</span>
      </div>
    </div>
    <div class="product__content p-relative">
      <div class="product__content-inner">
        <nuxt-link :href="`/product-details/${item.id}`">
          <span v-html="item.title"></span>
        </nuxt-link>
        <div class="product__price transition-3">
          <span>${{ typeof item.price === 'number' ? item.price.toFixed(2) : item.price }}</span>
          <span v-if="item.old_price" class="old-price">${{ item.old_price }}</span>
        </div>
      </div>
      <div class="add-cart p-absolute transition-3">
        <a @click.prevent="store.add_cart_product(item)" href="#">+ Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type ProductType } from '../../types/productType';
import { useCartStore } from '../../store/useCart';
import { useWishlistStore } from '../../store/useWishlist';
import { useCompareStore } from '../../store/useCompare';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true,
    },
  },
  setup() {
    const store = useCartStore();
    const wishlistState = useWishlistStore();
    const compareState = useCompareStore();
    return { store, wishlistState, compareState };
  },
});
</script>
