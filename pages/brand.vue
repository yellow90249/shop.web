<template>
  <layout :transparent="true">
    <breadcrumb-area title="品牌介紹" subtitle="品牌介紹" />
    <brand-area />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import BrandArea from '../components/brand/BrandArea.vue';

useHead({
  title: '品牌介紹',
});
</script>
