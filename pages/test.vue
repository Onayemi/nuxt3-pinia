<template>
  <div class="mt-24">{{ config.public.apiBase }}</div>
  <div class="mt-4">Endpoint: {{ endpoint }}</div>
</template>

<script setup>
const config = useRuntimeConfig();
const endpoint = config.public.apiBase;
console.log("Runtime config:", endpoint);
if (process.server) {
  console.log("API secret:", config.apiSecret);
}
</script>
