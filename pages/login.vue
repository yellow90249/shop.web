<template>
  <layout :transparent="true">
    <breadcrumb-area title="登入" subtitle="登入" />
    <login-area />
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import LoginArea from '../components/login-register/LoginArea.vue';

useHead({
  title: 'Login - outStock',
});
</script>
