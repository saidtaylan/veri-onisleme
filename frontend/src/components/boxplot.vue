<template>
  <ApexChart
    width="500"
    type="boxPlot"
    :options="globalData.chartOptions"
    :series="globalData.series"
  />
</template>
<script setup>
import { reactive } from "vue";
import ApexChart from "vue3-apexcharts";

const props = defineProps({
  fiveNumber: {
    type: Object,
  },
  col: {
    type: String,
  },
});

const globalData = reactive({
  chartOptions: {
    chart: {
      type: "boxPlot",
    },
  },
  series: [
    {
      data: [
        {
          x: props.col,
          y: Object.values(props.fiveNumber),
        },
      ],
    },
  ],
});
</script>
