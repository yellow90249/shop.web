<template>
  <section class="shop__area pb-65">
    <div class="shop__top grey-bg-6 pt-100 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="product__modal-box d-flex">
              <div class="tab-content mb-20" id="product-detailsContent">
                <div class="product__modal-img product__thumb w-img">
                  <img :src="`http://localhost:7777/${props.product?.ImageURL}`" alt="product_img" />
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
    <!-- <div class="shop__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="product__details-tab">
              <div class="product__details-tab-nav text-center mb-45">
                <nav>
                  <div
                    class="nav nav-tabs justify-content-start justify-content-sm-center"
                    id="pro-details"
                    role="tablist"
                  >
                    <a
                      class="nav-item nav-link active"
                      id="des-tab"
                      data-bs-toggle="tab"
                      href="#des"
                      role="tab"
                      aria-controls="des"
                      aria-selected="true"
                      >Description</a
                    >
                    <a
                      class="nav-item nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                      >Reviews (4)</a
                    >
                  </div>
                </nav>
              </div>
              <div class="tab-content" id="pro-detailsContent">
                <div class="tab-pane fade show active" id="des" role="tabpanel">
                  <div class="product__details-des">
                    <p>{{ item.details.details_text }}</p>

                    <div class="product__details-des-list mb-20">
                      <ul>
                        <li v-for="(list, i) in item.details.details_list" :key="i">
                          <span>{{ list }}</span>
                        </li>
                      </ul>
                    </div>
                    <p>{{ item.details.details_text_2 }}</p>
                  </div>
                </div>

                <div class="tab-pane fade" id="review" role="tabpanel">
                  <product-details-review :item="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { type ProductType } from '../../types/productType';
import ProductDetailsContent from './ProductDetailsContent.vue';
import ProductDetailsReview from './ProductDetailsReview.vue';

const props = defineProps<{ product: ProductType }>();
</script>
