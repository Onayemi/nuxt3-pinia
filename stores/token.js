export const useTokenStore = defineStore("token", {
  state: () => ({
    token: null,
    loggedIn: false,
  }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
    getStatus: (state) => state.loggedIn,
  },
  actions: {
    setToken(token) {
      this.token = token;
      this.loggedIn = true;
    },
    removeToken() {
      const auth = useAuthStore();
      auth.$reset();
      this.$reset();
      this.removeLocalStorage();
      return navigateTo("/login");
    },
    removeLocalStorage() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTokenStore, import.meta.hot));
}
