<template>
  <div :class="`product__modal-content`">
    <h4>
      <nuxt-link :href="`/product-details/${product?.ID}`">
        <span v-html="product?.Name"></span>
      </nuxt-link>
    </h4>
    <div class="rating rating-shop mb-15">
      <ul>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fas fa-star"></i></span>
        </li>
        <li>
          <span><i class="fal fa-star"></i></span>
        </li>
      </ul>
    </div>
    <div class="product__price-2 mb-25">
      <span>${{ props.product?.Price.toLocaleString() }}</span>
    </div>
    <div class="product__modal-des mb-30">
      <p>{{ props.product?.Description }}</p>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <div class="pro-quan-area d-lg-flex align-items-center">
          <div class="product-quantity-title">
            <label>數量</label>
          </div>
          <div class="product-quantity">
            <div class="cart-plus-minus">
              <input v-model="amount" type="text" />
              <div @click="decreaseAmountHandler" class="dec qtybutton">-</div>
              <div @click="amount++" class="inc qtybutton">+</div>
            </div>
          </div>
          <div class="pro-cart-btn ml-20">
            <a @click.prevent="addCartItem(props.product)" href="#" class="os-btn os-btn-black os-btn-3 mr-10">
              + 加入購物車</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '../../types/productType';
import { addCartItemAPI } from '../../api';
import { toast } from 'vue3-toastify';
import { setGlobalUserState } from '../../store/globalState';

const props = defineProps<{ product: ProductType }>();
const amount = ref(1);

function decreaseAmountHandler() {
  if (amount.value > 1) {
    amount.value--;
  }
}

async function addCartItem(product: ProductType) {
  try {
    const res = await addCartItemAPI({ ProductID: product.ID, Quantity: amount.value, UnitPrice: product.Price });
    console.log('🚀 ~ addCartItem ~ res:', res);
    await setGlobalUserState();
    toast.success('加入購物車');
  } catch (err) {
    // toast.error(err);
    toast.error('請先等入');
  }
}
</script>
