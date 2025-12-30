<template>
  <layout :transparent="true">
    <breadcrumb-area title="登入" subtitle="登入" />
    <section class="login-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="basic-login">
              <h3 class="text-center mb-60">登入</h3>
              <form @submit.prevent="login">
                <div class="mb-20">
                  <label for="email-id">信箱 <span>**</span></label>
                  <input v-model="formData.email" type="text" placeholder="輸入信箱..." style="padding-right: 70px" />
                </div>

                <div class="mb-20">
                  <label for="pass">密碼 <span>**</span></label>
                  <input v-model="formData.password" type="password" placeholder="輸入密碼..." />
                </div>

                <div class="mt-10"></div>
                <button type="submit" class="os-btn w-100">登入</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script setup lang="ts">
import Layout from '../layout/Layout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import { loginAPI } from '../api';
import { toast } from 'vue3-toastify';
import { setGlobalUserState } from '../store/globalState';

useHead({
  title: '登入',
});

const router = useRouter();

const formData = ref({
  email: '',
  password: '',
});
  
async function login() {
  try {
    const res = await loginAPI({ Email: formData.value.email, Password: formData.value.password });
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
