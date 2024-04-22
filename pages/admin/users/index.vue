<template>
  <div class="mt-24">
    <h1 class="text-5xl">Users Page here</h1>
    <p>{{ auth }}</p>
  </div>
</template>

<script setup>
// const { getAllUsers } = storeToRefs(useAuthStore());
const auth = useAuthStore();
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
</script>
