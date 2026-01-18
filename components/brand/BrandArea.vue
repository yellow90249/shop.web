<template>
  <section class="login-area pt-100 pb-100">
    <div class="container">
      <div class="brand-item" style="margin-bottom: 40px">
        <img style="margin: auto" src="~/assets/img/brand/potato.png" />
        <div style="display: flex; flex-direction: column; justify-content: center">
          <h1 style="margin-bottom: 12px">土豆先生</h1>
          <p style="margin: 0; font-size: 18px">
            從薯條工廠逃出來的土豆，因為想賺錢開始搞電商。
          </p>
        </div>
      </div>

      <div class="brand-item">
        <div style="display: flex; flex-direction: column; justify-content: center">
          <h1 style="margin-bottom: 12px">企鵝先生</h1>
          <p style="margin: 0; font-size: 18px">
            土豆先生的朋友，受雇當物流司機。
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
