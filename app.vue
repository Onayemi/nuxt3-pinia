<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <Navbar /> -->
    <!-- <NuxtPage /> -->
    <!-- AdminLayout | GuestLayout -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  // initCarousels();
  // initCollapses();
  // initDismisses();
  // initDrawers();
  initFlowbite();
});

// watch(() => {
//   initFlowbite();
// });
const count = useCounterStore();
</script>
