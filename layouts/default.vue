<template>
    <v-main>
        <AppBar @drawer-button-click="drawer = !drawer" />
        <v-navigation-drawer v-model="drawer" app>
            <v-list density="compact" nav>
                <v-list-item to="/">
                    <v-list-item-title>{{ $t('navDrawer.home') }}</v-list-item-title>
                </v-list-item>
                <v-list-item to="/timeline">
                    <v-list-item-title>{{ $t('navDrawer.timeline') }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <slot />
    </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const drawer = ref(false);
</script>

<style scoped></style>