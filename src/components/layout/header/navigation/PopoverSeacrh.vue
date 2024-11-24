<template lang="pug">
  Dialog(
    :visible="isOpen"
    :show-header="false"
    :draggable="false"
    dismissable-mask
    modal
    position="top"
    :style="{ width: '35rem' }"
    @update:visible="emit('close')"
  )
    .flex.items-center.w-full.mt-4
      FloatLabel.w-full( variant="on" )
        InputText.w-full(
          v-model="search"
          id="search"
        )
        label( for="search" ) Find product or price
    
    .mt-4.card( v-if="search && searchProducts.length" )
      DataView(
        :value="searchProducts"
        paginator
        :rows="6"
      )
        template( #list="slotProps" )
          .grid.grid-cols-1.gap-x-6.gap-y-10.mb-4( class="sm:grid-cols-2 lg:grid-cols-3" )
            a.group(
              v-for="product in slotProps.items"
              :key="product.id"
              href="#"
            )
              product-card( :data="product" )
</template>

<script setup>
import { ref, computed } from "vue";
import Dialog from "primevue/dialog";
import FloatLabel from "primevue/floatLabel";
import InputText from "primevue/inputtext";
import DataView from "primevue/dataview";
import ProductCard from "~/components/product/Card.vue";

const props = defineProps(["isOpen", "products"]);
const emit = defineEmits(["close"]);

const search = ref("");

const searchProducts = computed(() => {
  const _search = search.value.trim().toLowerCase();

  return props.products.filter(
    (item) =>
      item.title.toLowerCase().includes(_search) || item.price === +_search
  );
});
</script>
