<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ $t("login.title") }}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="submitForm">
                            <v-text-field v-model="credentials.username" :label="$t('login.email')" type="email"
                                required></v-text-field>
                            <v-text-field v-model="credentials.password" :label="$t('login.password')" type="password"
                                required></v-text-field>
                            <v-btn type="submit" color="primary" class="mr-4">
                                {{ $t('login.submit') }}
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

definePageMeta({
    layout: 'login'
})

const { login } = useAuthStore()

const credentials = reactive({
    username: '',
    password: ''
})

const submitForm = () => {
    login(credentials)
}

</script>

<style scoped></style>