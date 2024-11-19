<template lang="pug">
  transition-root(
    as="template"
    :show="open"
  )
    mobile-dialog.relative.z-40(
      class="lg:hidden"
      @close="emit('close')"
    )
      transition-child(
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      )
        .fixed.inset-0( class="bg-black/25" )

      .fixed.inset-0.z-40.flex
        transition-child(
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        )
          mobile-dialog-panel.relative.flex.w-full.max-w-xs.flex-col.overflow-y-auto.bg-white.pb-12.shadow-xl
            .flex.px-4.pb-2.pt-5
              button.relative.inline-flex.items-center.justify-center.rounded-md.p-2.text-gray-400(
                type="button"
                class="-m-2"
                @click="emit('close')"
              )
                span.absolute( class="-inset-0.5" )
                span.sr-only Close menu
                x-mark-icon.size-6( aria-hidden="true" )

            mobile-dialog-panel-tabs(
              :navigation="navigation"
              :data="data"
            )
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog as MobileDialog,
  DialogPanel as MobileDialogPanel
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import MobileDialogPanelTabs from "./mobile/DialogPanelTabs.vue";

defineProps(["data", "navigation", "open"]);
const emit = defineEmits({ close: false });
</script>
