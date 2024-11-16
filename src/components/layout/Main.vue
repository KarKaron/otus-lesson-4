<template lang="pug">
  .grid.grid-cols-1.gap-x-6.gap-y-10(
    class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  )
    a.group(
      v-for="product in data"
      :key="product.id"
      href="#"
    )
      product-card( :data="product" )
</template>

<script setup>
import ProductCard from "~/components/product/Card.vue";

defineProps(["data"]);
</script>
