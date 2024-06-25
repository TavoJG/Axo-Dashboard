<template>
    <v-chart class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import type { Record } from "~/types";


use([CanvasRenderer, LineChart, TitleComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,])


const props = defineProps<{
    title: string,
    records: Record[]
}>()

const units: ComputedRef<string> = computed(() => props.records.length > 0 ? props.records[0].units : '')

const option: ComputedRef = computed(() => ({
    title: {
        text: props.title
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    legend: {
        data: [`${props.title} (${units.value})`]
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',

    },
    series: [
        {
            name: `${props.title} (${units.value})`,
            data: props.records.map((record) => [record.createdAt, record.value]),
            type: 'line'
        }
    ]
}))

</script>

<style scoped>
.chart {
    height: 60vh;
}
</style>