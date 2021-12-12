<template>
  <ApexChart
    width="1200"
    type="bar"
    :options="globalData.chartOptions"
    :series="globalData.series"
  />
</template>
<script setup>
import { reactive } from "vue";
import ApexChart from "vue3-apexcharts";

const props = defineProps({
  frequency: {
    type: Object,
  },
  col: {
    type: String,
  },
});

const globalData = reactive({
  chartOptions: {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: Object.keys(props.frequency.freq),
    },
  },
  series: [
    {
      name: props.col,
      data: Object.values(props.frequency.freq),
    },
  ],
});
</script>
