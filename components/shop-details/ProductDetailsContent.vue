<template>
  <div :class="`product__modal-content ${style_2 ? 'product__modal-content-2' : ''}`">
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
      <!-- <span class="rating-no ml-10"> {{ product.rating }} rating(s) </span> -->
    </div>
    <div class="product__price-2 mb-25">
      <span>${{ product?.Price.toLocaleString() }}</span>
      <!-- <span v-if="product.old_price" class="old-price">${{ product.old_price }}</span> -->
    </div>
    <div class="product__modal-des mb-30">
      <p>{{ product?.Description }}</p>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <div class="pro-quan-area d-lg-flex align-items-center">
          <div class="product-quantity-title">
            <label>數量</label>
          </div>
          <div class="product-quantity">
            <div class="cart-plus-minus">
              <input type="text" />
              <div class="dec qtybutton">-</div>
              <div class="inc qtybutton">+</div>
            </div>
          </div>
          <div class="pro-cart-btn ml-20">
            <a @click.prevent="addCartItem" href="#" class="os-btn os-btn-black os-btn-3 mr-10">+ Add to Cart</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '../../types/productType';
import { addCartItemAPI } from '../../api';

interface Props {
  product: ProductType;
  style_2?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  style_2: false,
});

async function addCartItem() {
}
</script>
