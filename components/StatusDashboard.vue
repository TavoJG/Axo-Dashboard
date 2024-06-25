<template>
    <v-row class="status-dahsboard" v-for="(group, i) in groupedRecords" :key="i">
        <v-col cols="12" sm="8" md="4" v-for="(record, j) in group" :key="j">
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>{{ record.variable }}</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>{{ record.value }} {{ record.units }}</v-list-item-title>
                            <v-list-item-subtitle>{{ $t('dashboard.lastUpdate') }}:</v-list-item-subtitle>
                            <v-list-item-subtitle>{{ record.createdAt }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { Record } from '@/types'

const { locale } = useI18n()
const { lastRecords, getLastRecords } = useRecords()



const groupedRecords: ComputedRef<Record[][]> = computed(() => {
    const result: Record[][] = []
    if (!lastRecords.value) return result
    for (let i = 0; i < lastRecords.value.length; i += 3) {
        const group = lastRecords.value.slice(i, i + 3);
        result.push(group.map((record) => ({
            ...record,
            createdAt: formatDate(record.createdAt, locale.value)
        })));
    }
    return result
})

const formatDate = (rawDate: string, locale: string): string => {
    const date = new Date(rawDate)
    return date.toLocaleString(locale)
}

onBeforeMount(async () => {
    await getLastRecords()
})
</script>

<style scoped>
.status-dahsboard {
    margin: 20px;
}
</style>
