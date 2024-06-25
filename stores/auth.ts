import { defineStore } from "pinia";
import type { User } from "~/types";

type LoginCredentials = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  //Composables

  const axios = useAxios();

  //State
  const authError = ref(false);
  const user: Ref<User | null> = ref(null);

  //Getters
  const isLogged: ComputedRef<boolean> = computed(() => !!user.value);
  const isStaff: ComputedRef<boolean> = computed(() =>
    user.value ? user.value.isStaff : false
  );
  const email: ComputedRef<string> = computed(() =>
    user.value ? user.value.email : ""
  );

  //Actions
  const getUserData = async () => {
    const response = await axios.get<User>("/auth/me");
    user.value = response.data;
  };

  const getCSRF = async () => {
    await axios.get<User>("/auth/csrf");
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      authError.value = false;
      await getCSRF();
      await axios.post("/auth/login", credentials);
      await getUserData();
      navigateTo("/");
    } catch (error) {
      console.error(error);
      authError.value = true;
    }
  };

  const logout = async () => {
    await axios.get("/auth/logout");
    user.value = null;
  };

  const checkCurrentLogin = async (): Promise<boolean> => {
    try {
      await getCSRF();
      await getUserData();
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    login,
    logout,
    checkCurrentLogin,
    isLogged,
    authError,
    email,
    isStaff,
  };
});
