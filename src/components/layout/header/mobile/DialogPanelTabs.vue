<template lang="pug">
  tab-group.mt-2( as="div" )
    .border-b.border-gray-200
      tab-list.flex.space-x-8.px-4( class="-mb-px" )
        tab(
          as="template"
          v-for="category in navigation.categories"
          :key="category.name"
          v-slot="{ selected }"
        )
          button(
            :class=`[
              selected
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-900',
              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
            ]`
          ) {{ category.name }}
    tab-panels( as="template" )
      tab-panel.space-y-10.px-4.pb-8.pt-10
        .grid.grid-cols-2.gap-x-4
          .group.relative.text-sm.pb-4(
            v-for="item in data"
            :key="item.name"
          )
            img.aspect-square.w-full.rounded-lg.bg-gray-100.object-cover(
              :src="item.image"
              :alt="item.name"
              class="group-hover:opacity-75"
            )
            a.mt-6.block.font-medium.text-gray-900( href="#" )
              span.absolute.inset-0.z-10( aria-hidden="true")
              | {{ item.name }}

  .space-y-6.border-t.border-gray-200.px-4.py-6
    .flow-root(
      v-for="page in navigation.pages"
      :key="page.name"
    )
      a.block.p-2.font-medium.text-gray-900(
        :href="page.href"
        class="-m-2"
      ) {{ page.name }}

  .space-y-6.border-t.border-gray-200.px-4.py-6
    .flow-root
      a.block.p-2.font-medium.text-gray-900(
        href="#"
        class="-m-2"
      ) Sign in
      a.block.p-2.font-medium.text-gray-900(
        href="#"
        class="-m-2"
      ) Create account
</template>

<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

defineProps(["navigation", "data"]);
</script>
