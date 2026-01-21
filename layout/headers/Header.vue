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
                <nuxt-link href="/product">
                  <img style="height: 45px" src="~/assets/img/logo/logo.svg" alt="logo" />
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
                      <a href="#" class="cart">
                        <i class="ion-bag"></i> 購物車
                        <span v-if="globalUserState.ID != 0">({{ globalUserState.CartItems.length }})</span>
                      </a>
                      <cart-mini />
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
import Menus from './Menus.vue';
import CartMini from './header-com/CartMini.vue';
import OffCanvas from '../../components/common/sidebar/OffCanvas.vue';
import { globalUserState, setGlobalUserState } from '../../store/globalState';

interface Props {
  white_bg?: boolean;
  transparent?: boolean;
}

withDefaults(defineProps<Props>(), {
  white_bg: false,
  transparent: false,
});

const isSticky = ref(false);
const offcanvas = ref<InstanceType<typeof OffCanvas>>();

const handleSticky = () => {
  isSticky.value = window.scrollY > 80;
};

const handleOffcanvas = () => {
  offcanvas.value?.OpenOffcanvas();
};

onMounted(async () => {
  window.addEventListener('scroll', handleSticky);
  if (!!localStorage.getItem('token')) {
    try {
      await setGlobalUserState();
    } catch (err) {
      localStorage.removeItem('token');
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});
</script>
