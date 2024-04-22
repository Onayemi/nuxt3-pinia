<template>
  <div class="mt-36 text-center">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <!-- <h1 class="text-9xl">404</h1> -->
    <h2 class="text-5xl">Ooops.</h2>
    <!-- <h4 class="text-3xl mt-5">{{ error.message }}</h4> -->
    <button
      class="mt-6 bg-slate-500 text-white px-6 py-4"
      @click="handleClearError"
    >
      Go Home...
    </button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>
