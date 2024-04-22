export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  // const { loggedIn } = useTokenStore();
  // console.log("loggedIn", tokenStore.getStatus);
  if (!tokenStore.getStatus) {
    // if (to.path !== '/search'  && tokenStore.value.role === 'ADMIN') {
    return navigateTo("/login");
  }
});
