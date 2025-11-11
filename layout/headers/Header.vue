<template>
  <client-only>
    <header>
      <div
        id="header-sticky"
        :class="`header__area ${transparent ? 'header__transparent' : ''} ${!white_bg ? 'grey-bg' : ''} 
        ${isSticky ? 'sticky' : ''}`"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo.png" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-8 col-sm-8">
              <div class="header__right p-relative d-flex justify-content-between align-items-center">
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <menus />
                  </nav>
                </div>
                <div @click.prevent="handleOffcanvas" class="mobile-menu-btn d-lg-none">
                  <a href="#" class="mobile-menu-toggle"><i class="fas fa-bars"></i></a>
                </div>
                <div class="header__action">
                  <ul>
                    <li>
                      <a href="#" class="cart"
                        ><i class="ion-bag"></i> Cart
                        <span>({{ state.totalPriceQuantity.quantity }})</span>
                      </a>
                      <!-- cart mini start -->
                      <cart-mini />
                      <!-- cart mini end -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- off canvas start -->
    <off-canvas ref="offcanvas" />
    <!-- off canvas end -->
  </client-only>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../../store/useCart';
import Menus from './Menus.vue';
import CartMini from './header-com/CartMini.vue';
import OffCanvas from '../../components/common/sidebar/OffCanvas.vue';

interface Props {
  white_bg?: boolean;
  transparent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  white_bg: false,
  transparent: false,
});

const state = useCartStore();
const isSticky = ref(false);
const showSearch = ref(false);
const offcanvas = ref<InstanceType<typeof OffCanvas>>();

const handleSticky = () => {
  isSticky.value = window.scrollY > 80;
};

const handleOffcanvas = () => {
  offcanvas.value?.OpenOffcanvas();
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});
</script>
