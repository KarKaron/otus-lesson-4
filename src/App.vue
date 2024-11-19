<template lang="pug">
  .bg-white
    layout-header( :data="categories" )
    .mx-auto.max-w-2xl.px-4.py-16(
      class="sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    )
      h1.text-3xl.font-bold.mb-4 Products
      layout-main(
        v-if="isLoaded"
        :data="filteredProducts"
        title="Products"
      )
      skeleton(
        v-else
        :limit="LIMIT_PRODUCT"
      )
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import LayoutHeader from "~/components/layout/Header.vue";
import LayoutMain from "~/components/layout/Main.vue";
import Skeleton from "~/components/common/skeleton/Skeleton.vue";

const LIMIT_PRODUCT = 8;
const PATH_PRODUCTS = "https://api.escuelajs.co/api/v1/products";
const PATH_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";

const isLoaded = ref(false);
const products = ref([]);
const categories = ref([]);

const filteredProducts = computed(() =>
  products.value.splice(0, LIMIT_PRODUCT)
);

onBeforeMount(() => {
  setTimeout(() => {
    fetchProduct();
    fetchCategories();
    isLoaded.value = true;
  }, 2000);
});

async function fetchProduct() {
  const response = await fetch(PATH_PRODUCTS);
  products.value = await response.json();
}

async function fetchCategories() {
  const response = await fetch(PATH_CATEGORIES);
  categories.value = (await response.json()).filter(item => !item.image.includes("any"));
}
</script>
