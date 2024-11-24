<template lang="pug">
  popover-group.hidden.z-40(
    class="lg:ml-8 lg:block lg:self-stretch"
  )
    .flex.h-full.space-x-8
      popover.flex(
        v-for="category in navigation.categories"
        :key="category.id"
        v-slot="{ open }"
      )
        .relative.flex
          popover-button.relative.z-10.flex.items-center.border-b-2.pt-px.text-sm.font-medium(
            :class=`[
              open
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-700 hover:text-gray-800',
              '-mb-px transition-colors duration-200 ease-out'
            ]`
          ) {{ category.name }}

        transition(
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        )
          popover-panel.absolute.inset-x-0.top-full.text-sm.text-gray-500
            .absolute.inset-0.bg-white.shadow(
              class="top-1/2"
              aria-hidden="true"
            )
            .relative.bg-white
              .mx-auto.max-w-7xl.px-8.pb-8
                .col-start-2.grid.gap-x-8(
                  class="lg:grid-cols-3 xl:grid-cols-4"
                )
                  .group.relative.text-base(
                    v-for="item in data"
                    :key="item.name"
                    class="sm:text-sm"
                  )
                    a.mt-6.block.font-medium.text-gray-900( href="#" )
                      img.aspect-square.w-full.rounded-lg.bg-gray-100.object-cover(
                        v-if="item.image"
                        :src="item.image"
                        :alt="item.name"
                        class="group-hover:opacity-75"
                      )
                      .mt-2.pb-2( aria-hidden="true" ) {{ item.name }}

      a.flex.items-center.text-sm.font-medium.text-gray-700(
        v-for="page in navigation.pages"
        :key="page.name"
        :href="page.href"
        class="hover:text-gray-800"
      ) {{ page.name }}
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from "@headlessui/vue";

defineProps(["data", "navigation", "open"])
</script>
