<template lang="pug">
  .aspect-h-1.aspect-w-1.w-full.overflow-hidden.rounded-lg.bg-gray-200
    img.size-full.object-cover.object-center(
      :src="data.images[0]"
      :alt="data.title"
    )
  h3.mt-4.text-sm.text-gray-700 {{ data.title }}
  p.mt-1.text-lg.font-medium.text-gray-900 {{ data.price }} &#8364;
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
img:hover {
  transition: all ease 1s;
  transform: scale(1.2);
}
</style>
