<template>
  <layout :transparent="true">
    <breadcrumb-area title="商品" subtitle="Shop" />
    <shop-four-col />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import ShopFourCol from '../components/shop/ShopFourCol.vue';

useHead({
  title: '商品 | 土豆商城',
});
</script>
