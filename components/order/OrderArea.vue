<template>
  <client-only>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">圖片</th>
                      <th class="cart-product-name">名稱</th>
                      <th class="product-price">單位售價</th>
                      <th class="product-quantity">數量</th>
                      <th class="product-subtotal">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <order-item v-for="(orderItem, i) in order.OrderItems" :key="i" :item="orderItem" />
                  </tbody>
                </table>
              </div>

              <div class="row">
                <div class="col-md-5 ms-auto">
                  <div class="cart-page-total">
                    <h2>訂單總計</h2>
                    <ul class="mb-20">
                      <li>
                        總計 <span>${{ total?.toLocaleString() }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script setup lang="ts">
import OrderItem from './OrderItem.vue';
import { getOrderAPI } from '../../api';
import type { Order } from '../../types/productType';

const route = useRoute();
const order = ref<Order>({
  ID: 0,
  UserID: 0,
  RecipientName: '',
  RecipientPhone: '',
  RecipientEmail: '',
  RecipientAddress: '',
  TotalAmount: 0,
  PaymentMethod: '',
  Status: '',
  CreatedAt: '',
  UpdatedAt: '',
  OrderItems: [],
});
const total = computed(() => {
  return order.value.OrderItems.reduce((sum, item) => sum + item.UnitPrice * item.Quantity, 0);
});

onMounted(async () => {
  order.value = await getOrderAPI(Number(route.params.id));
});
</script>
