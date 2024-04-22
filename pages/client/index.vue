<template>
  <div class="container mt-24 mx-auto">
    <h1 class="text-5xl">This is Client Dashboard</h1>
    <button
      @click.prevent="auth.logout()"
      class="bg-gray-600 text-white px-4 py-3 my-6"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
const auth = useAuthStore();
definePageMeta({
  layout: "client",
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
