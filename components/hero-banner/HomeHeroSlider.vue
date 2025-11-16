<template>
  <section :class="`slider__area ${style_2 ? 'slider__area-2' : ''} p-relative tp_hero`">
    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        :class="`single-slider slider__height ${
          style_2 ? 'single-slider-2 slider__height-5' : ''
        } d-flex align-items-center`"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <div class="slider__content">
                <h2 v-html="item.title"></h2>
                <p v-html="item.subtile"></p>
                <nuxt-link href="/product" class="os-btn os-btn-2 hero-slider-btn">
                 前往查看
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
// external
import { type HeroSliderType } from '../../types/HeroSliderDataType';
import slider_img_1 from '~/assets/img/slider/slider-1.jpg';
import slider_img_2 from '~/assets/img/slider/slider-2.jpg';
import slider_img_3 from '~/assets/img/slider/slider-3.jpg';

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const slider_data = ref<HeroSliderType[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        title: '白色木質條紋提燈',
        subtile:
          '這款簡約北歐風格的白色提燈,採用條狀設計讓光線能自然透出,營造溫馨氛圍。頂部配有天然麻繩提把,方便手提或懸掛。',
      },
      {
        id: 2,
        bgImg: slider_img_2,
        title: '圓形藍牙音響',
        subtile:
          '採用黑灰雙色設計,正面配備網狀喇叭孔,側面設有實體按鍵操控。圓潤的造型搭配可拆式底座,擺放穩固且節省空間。',
      },
      {
        id: 3,
        bgImg: slider_img_3,
        title: '可調角度圓筒檯燈',
        subtile:
          '這款極簡設計的藍色圓筒檯燈,採用金屬材質與烤漆工藝,呈現亮麗的寶藍色澤。燈頭可360度旋轉調整照射角度,靈活滿足不同照明需求。',
      },
    ]);
    return { slider_data };
  },
});
</script>
