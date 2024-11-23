<template lang="pug">
  .bg-white.min-h-screen
    layout-header(
      :data="categories"
      :products="products"
    )
    .mx-auto.max-w-2xl.px-4.py-16(
      class="sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    )
      h1.text-3xl.font-bold.mb-4 New products
      layout-main(
        v-if="isLoaded"
        :data="filteredProducts"
        title="Products"
      )
      skeleton(
        v-else
        :limit="LIMIT_ON_PAGE"
      )
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import LayoutHeader from "~/components/layout/Header.vue";
import LayoutMain from "~/components/layout/Main.vue";
import Skeleton from "~/components/common/Skeleton.vue";

const LIMIT_ON_PAGE = 8;
const PATH_PRODUCTS = "https://api.escuelajs.co/api/v1/products";
const PATH_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";

const isLoaded = ref(false);
const products = ref([]);
const categories = ref([]);

const filteredProducts = computed(() =>
  products.value.splice(0, LIMIT_ON_PAGE)
);

onBeforeMount(() => {
  setTimeout(() => {
    fetchProduct();
    fetchCategories();
  }, 1500);
});

async function fetchProduct() {
  try {
    const response = await fetch(PATH_PRODUCTS);
    products.value = await response.json();
    isLoaded.value = true;
  } catch(error) {
    console.log(error);
  }
}

async function fetchCategories() {
  try {
    const response = await fetch(PATH_CATEGORIES);
    categories.value = (await response.json())
      .splice(0, LIMIT_ON_PAGE)
      .filter((item) => !item.image.includes("any"));
  } catch(error) {
    console.log(error);
  }
}
</script>
