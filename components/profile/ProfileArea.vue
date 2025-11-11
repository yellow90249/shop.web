<template>
  <section class="profile__area pt-120 pb-50 grey-bg">
    <div class="container">
      <div class="profile__basic-inner pb-20 bg-white">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic d-md-flex align-items-center">
              <div class="profile__basic-thumb mr-30">
                <img :src="`http://localhost:7777/${props.user.AvatarURL}`" alt="" />
              </div>
              <div class="profile__basic-content">
                <h3 class="profile__basic-title">
                  歡迎回來 <span>{{ props.user.Name }}</span>
                </h3>
                <p>{{ props.user.CartItems.length }} 待結帳商品 <nuxt-link href="/cart">瀏覽購物車</nuxt-link></p>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic-cart d-flex align-items-center justify-content-md-end">
              <div class="cart-info mr-10">
                <nuxt-link href="/cart">瀏覽購物車</nuxt-link>
              </div>
              <div class="cart-item">
                <nuxt-link href="/cart">
                  <i class="fa-regular fa-basket-shopping"></i>
                  <span class="cart-quantity">{{ props.user.CartItems.length }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '../../store/useCart';
import type { User } from '../../types/productType';

const props = defineProps<{ user: User }>();

const state = useCartStore();
</script>
