<template lang="pug">
  logo

  popover-categories(
    :data="data"
    :navigation="navigation"
    :open="open"
  )
  
  .ml-auto.flex.items-center
    Button.me-8(
      label="Send data"
      icon="pi pi-cart-arrow-down"
      severity="success"
      @click="isOrderOpen = true"
    )    
    .hidden( class="lg:flex lg:flex-1 lg:items-center lg:justify-end" )
      a.flex.justify-center.items-center.text-sm.font-medium.text-gray-700(
        v-for="(item, index) in navigation.login"
        :key="index"
        :href="item.href"
        class="hover:text-gray-800"
      )
        div {{ item.name }}
        .h-6.w-px.mx-5.bg-gray-200(
          v-if="index === 0"
          aria-hidden="true"
        )

    .flex.cursor-pointer(
      class="lg:ml-6"
      @click="isSearchOpen=true"
    )
      .p-2.text-gray-400( class="hover:text-gray-500")
        span.sr-only Search
        .flex.items-center.justify-center.pi.pi-search(
          style="font-size: 1.2rem"
          aria-hidden="true"
        )

    .ml-4.flow-root( class=" lg:ml-6" )
      a.group.flex.items-center.p-2( href="#" )
        .flex.items-center.justify-center.shrink-0.text-gray-400.pi.pi-shopping-cart(
          style="font-size: 1.2rem"
          class="group-hover:text-gray-500"
          aria-hidden="true"
        )
        span.ml-2.text-sm.font-medium.text-gray-700(
          class="group-hover:text-gray-800"
        ) 0
        span.sr-only items in cart, view bag

  popover-search(
    :is-open="isSearchOpen"
    :products="products"
    @close="isSearchOpen = false"
  )
  order(
    :is-open="isOrderOpen"
    @close="isOrderOpen = false"
  )
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Logo from "./navigation/Logo.vue";
import PopoverCategories from "./navigation/PopoverCategories.vue";
import PopoverSearch from "./navigation/PopoverSeacrh.vue";
import Order from "./navigation/Order.vue";

defineProps(["data", "navigation", "products", "open"]);

const isSearchOpen = ref(false);
const isOrderOpen = ref(false);
</script>
