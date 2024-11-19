<template lang="pug">
  .ml-4.flex( class="lg:ml-0" )
    a(href="#")
      span.sr-only Logo
      img.h-8.w-auto(
        :src="logoImage"
        alt="Logo"
      )
</template>

<script setup>
import logoImage from "/images/logo.jpg?url"
</script>
