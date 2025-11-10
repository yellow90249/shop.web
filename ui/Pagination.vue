<template>
  <div class="shop-pagination-wrapper">
    <div class="basic-pagination">
      <ul>
        <li class="page-item" :class="{ disabled: currPage === 1 }">
          <a @click="setCurrPage(currPage - 1)" style="cursor: pointer">
            <i class="fal fa-angle-left"></i>
          </a>
        </li>

        <li class="page-item" v-for="n in totalPages" :key="n">
          <a @click="setCurrPage(n)" :class="['page-link', { active: currPage === n }]" style="cursor: pointer">
            {{ n }}
          </a>
        </li>

        <li class="page-item" :class="{ disabled: currPage === totalPages }">
          <a @click="setCurrPage(currPage + 1)" style="cursor: pointer">
            <i class="fal fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currPage: number;
  totalRows: number;
  perPage: number;
}>();
const totalPages = computed(() => Math.ceil(props.totalRows / props.perPage));
const emit = defineEmits(['changeCurrPage']);
function setCurrPage(page: number) {
  emit('changeCurrPage', page);
}
</script>

<style>
.page-item.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
