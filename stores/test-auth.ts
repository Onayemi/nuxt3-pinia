import { defineStore } from "pinia";
import type { Customer, Login, User } from "~/type";
// import typerscript
// create type.ts and put all your type there in the root directory
// website to convert type ----> app.quicktype.io

export const useMyTestAuthStore = defineStore("test", () => {
  const user = ref();
  const token = useCookie("MY_COOKIE", {
    maxAge: 60 * 60,
  });

  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);

  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<User>("url", {
        method: "POST",
        body: data,
      });
      setToken(res.token);
      await fetchCustomer();
    } catch (error) {
      setToken();
      setUser();
      console.log(error);
    }
  };

  const fetchCustomer = async () => {
    if (token.value) {
      try {
        const res = await $fetch<Customer>("url/user/1");
        setUser(res);
      } catch (error) {
        setUser();
        console.log(error);
      }
    }
  };

  const logout = () => {
    setToken();
    setUser();
  };

  return { user, token, logout, signIn, fetchCustomer, setUser, setToken };
});
