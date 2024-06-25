export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const { checkCurrentLogin } = authStore;
  const { isLogged } = storeToRefs(authStore);

  if (isLogged.value) {
    return;
  }

  const currentLoginResult = await checkCurrentLogin();

  if (currentLoginResult) {
    return;
  }

  if (to.path !== "/login") {
    return navigateTo("/login");
  }
});
