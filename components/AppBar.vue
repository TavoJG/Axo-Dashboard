<template>
  <v-app-bar color="primary" app>
    <v-app-bar-nav-icon @click.stop="drawerButtonClick" />
    <v-toolbar-title>AXO - Dashboard</v-toolbar-title>
    <v-spacer />
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          {{ email }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="closeSession">
          <v-list-item-title>{{ $t('appBar.logout') }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="setLocale('en')">
          <v-list-item-title>{{ $t('appBar.english') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setLocale('es')">
          <v-list-item-title>{{ $t('appBar.spanish') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const { logout } = authStore
const { email } = storeToRefs(authStore);
const { setLocale } = useI18n()


const closeSession = async () => {
  await logout()
  navigateTo('/login')
}


const emit = defineEmits(["drawerButtonClick"]);

const drawerButtonClick = () => emit("drawerButtonClick");
</script>

<style scoped></style>
