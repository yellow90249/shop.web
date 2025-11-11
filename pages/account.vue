<template>
  <layout :transparent="true">
    <breadcrumb-area title="我的帳戶" subtitle="我的帳戶" />
    <profile-area :user="user" />
    <!-- <profile-menu-area /> -->
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import ProfileArea from '../components/profile/ProfileArea.vue';
import ProfileMenuArea from '../components/profile/ProfileMenuArea.vue';
import { getUserAPI } from '../api';
import type { User } from '../types/productType';

useHead({
  title: '我的帳戶',
});

const user = ref<User>({
  ID: 0,
  Email: '',
  Name: '',
  Password: '',
  AvatarURL: '',
  Role: '',
  CreatedAt: '',
  UpdatedAt: '',
  CartItems: [],
});

onBeforeMount(async () => {
  const res = await getUserAPI();
  console.log('🚀 ~ res:', res);
  user.value = res;
});
</script>
