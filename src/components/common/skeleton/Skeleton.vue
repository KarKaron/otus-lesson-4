<template lang="pug">
  .grid.grid-cols-1.gap-x-6.gap-y-10(
    class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  )
    skeleton-card(
      v-for="(item, index) in limit"
      :key="index"
    )
</template>

<script setup>
import SkeletonCard from "./SkeletonCard.vue";

defineProps(["limit"]);
</script>
