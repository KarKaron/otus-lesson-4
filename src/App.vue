<template lang="pug">
  .bg-white
    .mx-auto.max-w-2xl.px-4.py-16(
      class="sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    )
      layout-header( title="Products" )
      layout-main( v-if="isLoaded" :data="filteredProducts" )
      .grid.grid-cols-4.gap-x-6.gap-y-10( v-else )
        skeleton(
          v-for="(item, index) in LIMIT_PRODUCT"
          :key="index"
        )
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import LayoutHeader from "~/components/layout/Header.vue";
import LayoutMain from "~/components/layout/Main.vue";
import Skeleton from "~/components/common/Skeleton.vue";

const LIMIT_PRODUCT = 8;

const isLoaded = ref(false);
const products = ref([]);

const filteredProducts = computed(() =>
  products.value.splice(0, LIMIT_PRODUCT)
);

onBeforeMount(() => {
  setTimeout(async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    products.value = await response.json();
    isLoaded.value = true;
  }, 2000);
});
</script>
