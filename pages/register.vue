<template>
  <layout :transparent="true">
    <breadcrumb-area title="註冊" subtitle="註冊" />
    <section class="login-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="basic-login">
              <h3 class="text-center mb-60">註冊</h3>
              <form @submit.prevent="onSubmit">
                <div class="mb-20">
                  <label for="name">姓名 <span>**</span></label>
                  <input v-model="formData.name" id="name" type="text" placeholder="輸入姓名..." />
                </div>

                <div class="mb-20">
                  <label for="email-id">信箱 <span>**</span></label>
                  <div style="position: relative">
                    <input v-model="formData.email" type="text" placeholder="輸入信箱..." style="padding-right: 70px" />
                    <div
                      v-html="svgString"
                      style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%)"
                    ></div>
                  </div>
                </div>

                <div class="mb-20">
                  <label for="pass">密碼 <span>**</span></label>
                  <input v-model="formData.password" type="password" placeholder="輸入密碼..." />
                </div>

                <div class="mt-10"></div>
                <button type="submit" class="os-btn w-100">註冊</button>
                <div class="or-divide"><span>or</span></div>
                <nuxt-link href="/login" class="os-btn os-btn-black w-100">登入</nuxt-link>
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
import { toSvg } from 'jdenticon';
import { signupAPI } from '../api';
import { toast } from 'vue3-toastify';

useHead({
  title: '註冊',
});

const formData = ref({
  name: '',
  email: '',
  password: '',
});

const svgString = computed(() => {
  return toSvg(formData.value.email, 50);
});

function svgToPngFile(svgString: string, size: number): Promise<File> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, size, size);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(new File([blob], 'avatar.png', { type: 'image/png' }));
        } else {
          reject(new Error('轉換 PNG 失敗'));
        }
      }, 'image/png');
    };

    img.onerror = () => reject(new Error('載入 SVG 失敗'));
    img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
  });
}

async function onSubmit() {
  try {
    const file = await svgToPngFile(svgString.value, 50);
    const res = await signupAPI({
      Name: formData.value.name,
      Email: formData.value.email,
      Password: formData.value.password,
      UploadedFile: file,
    });
    console.log('🚀 ~ onSubmit ~ res:', res);
    toast.success(`註冊成功`);
  } catch (err) {
    console.log('🚀 ~ onSubmit ~ err:', err);
    toast.error(`註冊失敗`);
  }
}
</script>
