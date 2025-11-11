<template>
  <ul>
    <li>
      <nuxt-link href="/">主頁</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/shop-4-col">商品</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/account">我的帳戶</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/login">登入</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const menuData = [
  {
    link: '/',
    title: '主頁',
    hasDropdown: true,
    megamenu: true,
  },
  {
    link: '/shop-4-col',
    title: '商品',
    hasDropdown: true,
    megamenu: true,
  },
  {
    link: '/account',
    title: '我的帳戶',
    hasDropdown: true,
    megamenu: true,
  },
];
</script>
