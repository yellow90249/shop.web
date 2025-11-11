<template>
  <client-only>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div v-if="state.cart_products.length === 0" class="text-center">
              <h3>No Cart product</h3>
              <nuxt-link class="os-btn os-btn-black mt-20" to="/shop"> Shop Now </nuxt-link>
            </div>
            <form v-if="state.cart_products.length > 0" action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">圖片</th>
                      <th class="cart-product-name">名稱</th>
                      <th class="product-price">單位售價</th>
                      <th class="product-quantity">數量</th>
                      <th class="product-subtotal">小計</th>
                      <th class="product-remove">移除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <cart-item v-for="(cartItem, i) in globalUserState.CartItems" :key="i" :item="cartItem" />
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="coupon-all">
                    <div class="coupon">
                      <input
                        required
                        id="coupon_code"
                        class="input-text"
                        name="coupon_code"
                        value=""
                        placeholder="優惠碼"
                        type="text"
                      />
                      <button class="os-btn os-btn-black" name="apply_coupon" type="button">使用優惠碼</button>
                    </div>
                    <div class="coupon2">
                      <button @click="state.clear_cart" class="os-btn os-btn-black" name="update_cart" type="button">
                        Clear cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 ms-auto">
                  <div class="cart-page-total">
                    <h2>購物車總計</h2>
                    <ul class="mb-20">
                      <li>
                        總計 <span>${{ total?.toLocaleString() }}</span>
                      </li>
                    </ul>
                    <nuxt-link class="os-btn" href="/checkout">前往結賬</nuxt-link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script setup lang="ts">
import { useCartStore } from '../../store/useCart';
import CartItem from './CartItem.vue';
import { globalUserState } from '../../store/globalState';

const state = useCartStore();
const total = computed(() => {
  return globalUserState.value.CartItems.reduce((sum, item) => sum + item.UnitPrice * item.Quantity, 0);
});
</script>
