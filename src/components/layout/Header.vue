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
            .flex.items-center.justify-center.pi.pi-bars(
              style="font-size: 1.2rem"
              aria-hidden="true"
            )

          header-navigation(
            :data="data"
            :navigation="navigation"
            :products="products"
            :open="open"
          )
</template>

<script setup>
import { ref } from "vue";
import Mobile from "./header/Mobile.vue";
import HeaderNavigation from "./header/Navigation.vue";

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
