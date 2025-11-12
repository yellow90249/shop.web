<template>
  <layout :transparent="true">
    <breadcrumb-area title="訂單詳情" subtitle="訂單詳情" />
    <order-area />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../../layout/Layout.vue';
import BreadcrumbArea from '../../components/common/breadcrumb/BreadcrumbArea.vue';
import OrderArea from '../../components/order/OrderArea.vue';

useHead({
  title: '訂單詳情',
});
</script>
