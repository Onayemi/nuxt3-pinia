<template>
  <div>
    <AdminNavbar />
    <slot />
    <AdminFooter />
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
</script>
