<template>
  <section class="profile__menu pb-70 grey-bg">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-md-4">
          <div class="profile__menu-left bg-white" style="padding-top: 5px">
            <div class="profile__menu-tab">
              <div class="nav nav-tabs flex-column justify-content-start text-start" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-account"
                  type="button"
                  role="tab"
                  aria-controls="nav-account"
                  aria-selected="true"
                >
                  <i class="fa fa-user"></i> 帳戶資訊
                </button>
                <button
                  class="nav-link"
                  id="nav-order-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-order"
                  type="button"
                  role="tab"
                  aria-controls="nav-order"
                  aria-selected="false"
                >
                  <i class="fa fa-file"></i>訂單
                </button>
                <button @click="logout" class="nav-link"><i class="fa fa-sign-out"></i> 登出</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-8 col-md-8">
          <div class="profile__menu-right">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                <div class="profile__info">
                  <div class="profile__info-top d-flex justify-content-between align-items-center">
                    <h3 class="profile__info-title">帳戶資訊</h3>
                    <button
                      class="profile__info-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#profile_edit_modal"
                    >
                      <i class="fa-regular fa-pen-to-square"></i> 編輯
                    </button>
                  </div>
                  <div class="profile__info-wrapper white-bg">
                    <div class="profile__info-item">
                      <p>姓名</p>
                      <h4>{{ globalUserState.Name }}</h4>
                    </div>
                    <div class="profile__info-item">
                      <p>地址</p>
                      <h4>
                        {{ globalUserState.Address }}
                      </h4>
                    </div>
                    <div class="profile__info-item">
                      <p>電話</p>
                      <h4>
                        {{ globalUserState.Phone }}
                      </h4>
                    </div>
                    <div class="profile__info-item">
                      <p>信箱</p>
                      <h4>
                        {{ globalUserState.Email }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
                <div class="order__info">
                  <div class="order__info-top d-flex justify-content-between align-items-center">
                    <h3 class="order__info-title">訂單</h3>
                  </div>
                  <div class="order__list white-bg table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">訂單編號</th>
                          <th scope="col">詳情</th>
                          <th scope="col">總計</th>
                          <th scope="col">創建時間</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="order in orderList">
                          <td class="order__id"># {{ order.ID }}</td>
                          <td>
                            <nuxt-link :href="`/order-details/${order.ID}`" class="order__title">前往查看</nuxt-link>
                          </td>
                          <td>${{ order.TotalAmount?.toLocaleString() }}</td>
                          <td>
                            {{ formatDateTime(order.CreatedAt) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <profile-edit-modal />
</template>

<script setup lang="ts">
import ProfileEditModal from '../common/modals/ProfileEditModal.vue';
import { getOrderListAPI } from '../../api';
import { toast } from 'vue3-toastify';
import { globalUserState, clearGlobalUserState } from '../../store/globalState';
import type { Order } from '../../types/productType';
import { formatDateTime } from '../../utils';

const router = useRouter();

async function logout() {
  clearGlobalUserState();
  await router.push('/shop');
  toast.success('登出');
}

// 訂單
const orderList = ref<Order[]>([]);

onMounted(async () => {
  const res = await getOrderListAPI({ perPage: -1, currentPage: -1 });
  console.log('🚀 ~ res:', res);
  orderList.value = res.List;
  console.log('🚀 ~ orderList.value :', orderList.value);
});
</script>
