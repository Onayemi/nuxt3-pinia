<template>
  <div>
    <ClientNavbar />
    <slot />
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
</script>
