<template>
  <layout :transparent="true">
    <breadcrumb-area title="購物車" subtitle="購物車" />
    <cart-area />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import CartArea from '../components/cart-wishlists/CartArea.vue';

useHead({
  title: 'Cart - outStock',
});
</script>
