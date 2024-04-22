// import { useTokenStore } from "~/stores/token";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const tokenStore = useTokenStore();
  const authStore = useAuthStore();
  // const { loggedIn } = useTokenStore();
  // console.log("loggedIn", loggedIn);
  if (tokenStore.getStatus && authStore.getUser?.role === "admin") {
    return await navigateTo("/admin/dashboard");
  }
  if (tokenStore.getStatus && authStore.getUser?.role === "cashier") {
    return await navigateTo("/admin/dashboard");
  }

  if (tokenStore.getStatus && authStore.getUser?.role === "user") {
    return await navigateTo("/client");
  }

  // const expr = "Papayas";
  // const role = authStore.getUser?.role;
  // switch (role) {
  //   case "admin":
  //     return await navigateTo("/admin/dashboard");
  //     break;
  //   case "cashier":
  //   case "user":
  //     console.log("Mangoes and papayas are $2.79 a pound.");
  //     // expected output: "Mangoes and papayas are $2.79 a pound."
  //     break;
  //   default:
  //     console.log(`Sorry, we are out of ${expr}.`);
  // }
});
