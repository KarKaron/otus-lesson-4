<template lang="pug">
  .ml-auto.flex.items-center
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
        magnifying-glass-icon.size-6( aria-hidden="true" )

    .ml-4.flow-root( class=" lg:ml-6" )
      a.group.flex.items-center.p-2( href="#" )
        shopping-bag-icon.size-6.shrink-0.text-gray-400(
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
</template>

<script setup>
import { ref } from "vue";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon
} from "@heroicons/vue/24/outline";
import PopoverSearch from "./PopoverSeacrh.vue";

defineProps(["navigation", "products"]);

const isSearchOpen = ref(false);
</script>
