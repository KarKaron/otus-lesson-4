<template lang="pug">
  mobile(
    :data="data"
    :navigation="navigation"
    :open="open"
    @close="open = false"
  )

  header.relative.bg-white
    nav.mx-auto.max-w-7xl.px-4( aria-label="Top" class="sm:px-6 lg:px-8" )
      .border-b.border-gray-200
        .flex.h-16.items-center
          button.relative.rounded-md.bg-white.p-2.text-gray-400(
            type="button"
            class="lg:hidden"
            @click="open = true"
          )
            span.absolute( class="-inset-0.5" )
            span.sr-only Open menu
            bars-3-icon.size-6( aria-hidden="true" )

          logo

          popover-categories(
            :data="data"
            :navigation="navigation"
            :open="open"
          )

          additionally-navigation(
            :navigation="navigation"
            :products="products"
          )
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import Mobile from "./header/Mobile.vue";
import Logo from "./header/Logo.vue";
import PopoverCategories from "./header/PopoverCategories.vue";
import AdditionallyNavigation from "./header/AdditionallyNavigation.vue";

defineProps(["data", "products"]);

const navigation = {
  categories: [
    {
      id: "categories",
      name: "Categories"
    }
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" }
  ],
  login: [
    { name: "Sign in", href: "#" },
    { name: "Create account", href: "#" }
  ]
};

const open = ref(false);
</script>
