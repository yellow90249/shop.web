<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="profile__edit-input">
      <p>姓名</p>
      <Field name="name" type="text" placeholder="姓名" />
      <ErrorMessage name="name" class="text-danger" />
    </div>
    <div class="profile__edit-input">
      <p>信箱</p>
      <Field name="email" type="email" placeholder="信箱" />
      <ErrorMessage name="email" class="text-danger" />
    </div>
    <div class="profile__edit-input">
      <p>電話</p>
      <Field name="phone" type="text" placeholder="電話" />
      <ErrorMessage name="phone" class="text-danger" />
    </div>
    <div class="profile__edit-input">
      <p>地址</p>
      <Field name="address" type="text" placeholder="地址" />
      <ErrorMessage name="address" class="text-danger" />
    </div>
    <div class="profile__edit-input">
      <button type="submit" class="os-btn os-btn-black w-100">更新</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  phone: yup.string().required().min(10).label('Phone'),
  address: yup.string().required().min(3).label('Message'),
}); 

function onSubmit(values: object, { resetForm }: { resetForm: () => void }) {
  alert(JSON.stringify(values, null, 2));
  resetForm();
}
</script>
