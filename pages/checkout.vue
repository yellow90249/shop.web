<template>
  <layout :transparent="true">
    <breadcrumb-area title="付款" subtitle="付款" />
    <client-only>
      <checkout-area />
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
  title: '付款',
});
</script>
