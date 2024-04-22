<template>
  <div class="mt-24">
    <h1>Dynamic Routing {{ route.params.id }}</h1>
    <h1>Dynamic Routing 22 {{ id }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layouts: "admin",
});
const { id } = useRoute().params;
const route = useRoute();

if (id != Number(id)) {
  throw createError({
    statusCode: 404,
    statusMessage: "User Page not found!",
    fatal: true,
  });
}
</script>
