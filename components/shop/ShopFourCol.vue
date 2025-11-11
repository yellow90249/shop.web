<template>
  <section class="shop__area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="shop__content-area">
            <div class="shop__header d-sm-flex justify-content-between align-items-center mb-40">
              <!-- 商品名稱 -->
              <div class="contact__input" style="width: 261px; margin-right: 24px">
                <input
                  v-model="search.productName"
                  @keyup.enter="setProductList"
                  style="height: 45px"
                  type="text"
                  placeholder="搜尋名稱"
                />
              </div>

              <!-- 種類 -->
              <div class="product__modal-input special-select size" style="margin-right: auto">
                <select v-model="search.categoryId" @input="changeCategoryHandler" style="width: 261px">
                  <option :value="0">全種類</option>
                  <option v-for="item in categoryList" :value="item.ID">{{ item.Name }}</option>
                </select>
              </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                <div class="row custom-row-10">
                  <div
                    v-for="(item, i) in productList"
                    :key="i"
                    class="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10"
                  >
                    <product-item :item="item" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-40">
              <div class="col-xl-12">
                <pagination
                  @change-curr-page="changeCurrPageHandler"
                  :total-rows="totalRows"
                  :per-page="search.perPage"
                  :curr-page="search.currentPage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductItem from '../products/ProductItem.vue';
import Pagination from '../../ui/Pagination.vue';
import { getCategoryListAPI, getProductListAPI } from '../../api';

interface Category {
  ID: number;
  Name: string;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
}

interface Product {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  ImageURL: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: Category;
}

// 搜尋
const search = ref({
  productName: '',
  categoryId: 0,
  perPage: 12,
  currentPage: 1,
});
const totalRows = ref(0);
const categoryList = ref<Category[]>([]);
const productList = ref<Product[]>([]);

async function setCategoryList() {
  const res = await getCategoryListAPI();
  categoryList.value = res?.List;
}

async function setProductList() {
  const res = await getProductListAPI({
    currentPage: search.value.currentPage,
    perPage: search.value.perPage,
    name: search.value.productName,
    categoryId: search.value.categoryId,
  });
  productList.value = res.List;
  totalRows.value = res.Total;
  console.log('🚀 ~ setProductList ~ productList.value:', productList.value);
}

async function changeCategoryHandler(event: Event) {
  const target = event.target as HTMLSelectElement;
  search.value.categoryId = Number(target.value);
  await setProductList();
}

async function changeCurrPageHandler(page: number) {
  search.value.currentPage = page;
  await setProductList();
}

onBeforeMount(async () => {
  await setCategoryList();
  await setProductList();
});
</script>

<style>
.special-select::after {
  top: 26%;
}
</style>
