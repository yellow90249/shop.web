<template>
  <section class="checkout-area pb-70" style="padding-top: 100px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="checkbox-form">
            <h3>付款資訊</h3>
            <div class="row">
              <div class="checkout-form-list create-acc" style="margin-bottom: 16px">
                <input @change="useUserInfo" id="cbox" type="checkbox" />
                <label for="cbox">套用會員資訊</label>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>收件人姓名 <span class="required">*</span></label>
                  <input v-model="form.Name" name="city" type="text" placeholder="收件人姓名" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>地址 <span class="required">*</span></label>
                  <input v-model="form.Address" name="city" type="text" placeholder="地址" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>信箱 <span class="required">*</span></label>
                  <input v-model="form.Email" name="email" type="email" placeholder="信箱" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>電話 <span class="required">*</span></label>
                  <input v-model="form.Phone" name="phone" type="text" placeholder="電話" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="your-order" style="padding-bottom: 30px">
            <h3>你的訂單</h3>
            <div class="your-order-table table-responsive">
              <table>
                <thead>
                  <tr>
                    <th class="product-name">項目</th>
                    <th class="product-total">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in globalUserState.CartItems" :key="i" class="cart_item">
                    <td class="product-name">
                      {{ item.Product.Name }} <strong class="product-quantity"> × {{ item.Quantity }}</strong>
                    </td>
                    <td class="product-total">
                      <span class="amount">${{ (item.Quantity * item.Product.Price)?.toLocaleString() }}</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="shipping">
                    <th>運費</th>
                    <td>企鵝先生友情免運</td>
                  </tr>
                  <tr class="order-total">
                    <th>總計</th>
                    <td>
                      <strong>
                        <span class="amount"> ${{ total?.toLocaleString() }} </span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div class="order-button-payment mt-20">
              <button @click="createOrder" class="os-btn os-btn-black">送出訂單</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { globalUserState, setGlobalUserState } from '../../store/globalState';
import { createOrderAPI } from '../../api';
import { toast } from 'vue3-toastify';

const form = ref({ Name: '', Address: '', Email: '', Phone: '' });
const router = useRouter();

function useUserInfo(event: Event) {
  const isChecked = (event.target as HTMLInputElement).checked;
  if (isChecked) {
    form.value = {
      Name: globalUserState.value.Name,
      Address: globalUserState.value.Address,
      Email: globalUserState.value.Email,
      Phone: globalUserState.value.Phone,
    };
  } else {
    form.value = { Name: '', Address: '', Email: '', Phone: '' };
  }
}

const total = computed(() => {
  return globalUserState.value.CartItems.reduce((sum, item) => sum + item.UnitPrice * item.Quantity, 0);
});

async function createOrder() {
  const isFormValid = Object.values(form.value).every((value) => value !== '');
  if (!isFormValid) {
    toast.error('請填寫所有欄位');
    return;
  }

  try {
    await createOrderAPI({
      RecipientName: form.value.Name,
      RecipientAddress: form.value.Address,
      RecipientEmail: form.value.Email,
      RecipientPhone: form.value.Phone,
      TotalAmount: total.value,
      PaymentMethod: '魔法小卡',
    });
    await setGlobalUserState();
    await router.push('/shop');
    toast.success('建立訂單成功');
  } catch (err) {
    toast.error(String(err));
  }
}
</script>
