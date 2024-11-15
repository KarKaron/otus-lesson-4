<template lang="pug">
  .grid.grid-cols-4.gap-x-6.gap-y-10
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
