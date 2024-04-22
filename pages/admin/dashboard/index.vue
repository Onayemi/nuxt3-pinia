<template>
  <div class="container mt-24 mx-auto">
    <h1 class="text-5xl">Dashboard here</h1>
    <p>{{ auth.getUser }} - {{ getToken }} - {{ getStatus }}</p>
    <button
      @click.prevent="auth.logout()"
      class="bg-gray-600 text-white px-4 py-3 my-6"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
const { getToken, getStatus } = storeToRefs(useTokenStore());
const auth = useAuthStore();
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
