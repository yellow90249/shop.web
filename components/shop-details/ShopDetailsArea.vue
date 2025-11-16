<template>
  <section class="shop__area pb-65">
    <div class="shop__top grey-bg-6 pt-100 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="product__modal-box d-flex">
              <div class="tab-content mb-20" id="product-detailsContent">
                <div class="product__modal-img product__thumb w-img">
                  <img :src="`${apiBase}/${props.product?.ImageURL}`" alt="product_img" />
                  <div class="product__sale">
                    <span class="new">new</span>
                    <span class="percent">-16%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <product-details-content :product="props.product" :style_2="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type ProductType } from '../../types/productType';
import ProductDetailsContent from './ProductDetailsContent.vue';
import { getApiUrl } from '../../api';

const props = defineProps<{ product: ProductType }>();

const apiBase = getApiUrl();
</script>
