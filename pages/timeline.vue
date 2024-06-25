<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-card>

                <v-card-title>{{ $t('timeline.title') }}</v-card-title>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-select :items="variableNames" :label="$t('timeline.selectLabel')"
                            v-model="selectedVariable" />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-date-input :label="$t('timeline.startDate')" v-model="startDate" />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-date-input :label="$t('timeline.endDate')" v-model="endDate" />
                    </v-col>
                </v-row>
                <TimeLine :records="records" :title="selectedVariable" />
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

const { getRecordList, records } = useRecords()
const { getVariables, variableNames } = useVariables()

const getYesterdayDate = (): Date => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today;
}


const selectedVariable = ref<string>('')
const startDate = ref<Date>(getYesterdayDate())
const endDate = ref<Date>(new Date())

onBeforeMount(async () => {
    await getVariables()
    if (variableNames.value.length > 0) {
        selectedVariable.value = variableNames.value[0]
    }
})

watch(selectedVariable, async (newVariable) => {
    if (newVariable !== '') {
        await getRecordList(newVariable)
    }
})
</script>

<style scoped></style>