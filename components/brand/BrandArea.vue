<template>
  <section class="login-area pt-100 pb-100">
    <div class="container">
      <div class="brand-item" style="margin-bottom: 40px">
        <img style="margin: auto" src="~/assets/img/brand/potato.png" />
        <div style="display: flex; flex-direction: column; justify-content: center">
          <h1 style="margin-bottom: 12px">土豆先生</h1>
          <p style="margin: 0; font-size: 18px">
            多年前從薯條工廠逃出來的平凡土豆，為了拯救工廠中的同伴並向邪惡速食企業復仇，他在黑暗中積蓄力量悄悄等待機會，土豆商城是他的產業之一。
          </p>
        </div>
      </div>

      <div class="brand-item">
        <div style="display: flex; flex-direction: column; justify-content: center">
          <h1 style="margin-bottom: 12px">企鵝先生</h1>
          <p style="margin: 0; font-size: 18px">
            土豆先生的知心好友，前金牌特工，目前擔任土豆商城的貨運司機，喜歡的食物是提魚披薩。
          </p>
        </div>
        <img style="margin: auto" src="~/assets/img/brand/penguin.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { loginAPI } from '../../api';
import { toast } from 'vue3-toastify';
import { setGlobalUserState } from '../../store/globalState';

const router = useRouter();

async function login(Email: string, Password: string) {
  try {
    const res = await loginAPI({ Email, Password });
    if (res) {
      localStorage.setItem('token', res);
    }
    await setGlobalUserState();
    await router.push('/product');
    toast.success(`登入成功`);
  } catch (err) {
    toast.error(String(err));
  }
}
</script>

<style>
.brand-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>
