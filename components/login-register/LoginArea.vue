<template>
  <section class="login-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="basic-login">
            <h3 class="text-center mb-60">選擇登入用戶</h3>

            <button class="os-btn w-100 mb-20" @click="login('LiuBei@gmail.com', 'LiuBei')">劉備</button>
            <button class="os-btn w-100 mb-20" @click="login('ZhangFei@gmail.com', 'ZhangFei')">張飛</button>
            <button class="os-btn w-100 mb-20" @click="login('GuanYu@gmail.com', 'GuanYu')">關羽</button>
            <button class="os-btn w-100" @click="login('LuBu@gmail.com', 'LuBu')">呂布</button>
          </div>
        </div>
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
