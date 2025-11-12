<template>
  <layout :transparent="true">
    <breadcrumb-area title="付款" subtitle="付款" />
    <client-only>
      <div v-if="state.cart_products.length === 0" class="text-center pt-100 pb-100">
        <h3>No items found in cart to checkout</h3>
        <nuxt-link class="os-btn os-btn-black mt-15" to="/shop"> Shop Now </nuxt-link>
      </div>
      <div v-if="state.cart_products.length > 0">
        <checkout-area />
      </div>
    </client-only>
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import CheckoutArea from '../components/checkout/CheckoutArea.vue';
import { useCartStore } from '../store/useCart';

const state = useCartStore();

useHead({
  title: '付款 - 土豆',
});
</script>
