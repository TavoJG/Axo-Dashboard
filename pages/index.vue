<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-row align="center" justify="center">
                <v-col cols="auto" class="align-center justify-center">
                    <v-img src="~/assets/logo.png" width="250px" height="250px" />
                </v-col>
            </v-row>
            <v-card>
                <v-card-title> {{ $t('index.welcome') }}</v-card-title>
                <v-card-subtitle> {{ $t('index.subtitle') }}</v-card-subtitle>

                <StatusDashboard />
                <br />
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped></style>