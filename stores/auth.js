const config = useRuntimeConfig();
// import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
    allUsers: {},
  }),
  // persist: true,
  // persist: {
  //   storage: persistedState.cookiesWithOptions({
  //     sameSite: "strict",
  //   }),
  // },
  // Call this action when the store is initialized
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: "auth",
  //       storage: localStorage,
  //       paths: ["token", "user"],
  //     },
  //   ],
  // },
  persist: {
    paths: ["user"],
  },

  getters: {
    getUser: (state) => state.user,
    getAllUser: (state) => state.allUsers,
  },
  actions: {
    async login(formData) {
      const tokenStore = useTokenStore();
      try {
        console.log(`${config.public.apiUrl2}/login`);
        const { data } = await $fetch(`${config.public.apiUrl2}/login`, {
          method: "POST",
          body: { ...formData },
        });
        console.log("pinia_auth_store", data);
        tokenStore.setToken(data.token);
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        this.user = data.user;
        console.log(data.user.role);
        if (data.user.role === "admin") {
          return navigateTo("/admin/dashboard");
        }
        if (data.user.role === "user") {
          return navigateTo("/client");
        }
        // this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },

    setUser(data) {
      this.user = data.user;
    },

    async register(formData) {
      try {
        const { data } = await $fetch("", {
          method: "POST",
          body: { ...formData },
        });
        this.commonSetter(data);
      } catch (error) {
        throw error;
      }
    },

    commonSetter(data) {
      const tokenStore = useTokenStore();
      tokenStore.setToken(data.token);
      this.user = data.user;
      return navigateTo("/admin/dashboard");
    },

    async getAllUsers() {
      const tokenStore = useTokenStore();
      try {
        console.log(`${config.public.apiUrl2}/all-users`);
        const { res } = await $fetch(`${config.public.apiUrl}/all-users`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`,
          },
        });
        this.allUsers = res;
        // console.log(res);
        // return res;
        // tokenStore.removeToken();
      } catch (error) {
        throw error;
      }
    },

    // setAllUsers(users) {
    //   this.allUsers = users;
    // },

    async logout() {
      const tokenStore = useTokenStore();
      try {
        console.log(`${config.public.apiUrl2}/logout`);
        const res = await $fetch(`${config.public.apiUrl}/logout`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenStore.getToken}`,
          },
        });
        tokenStore.removeToken();
      } catch (error) {
        throw error;
      }
    },

    /* Refactor code 
   async register(formData) {
     const token = useTokenStore();
     try {
       const { data } = await $fetch("", {
         method: "POST",
         body: { ...formData },
       });
       this.commonSetter(data);    
     }catch (error) {
        throw error;
     }
    },
   */
  },
});

// Note anything you update in your store will load automatically without refresh
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
