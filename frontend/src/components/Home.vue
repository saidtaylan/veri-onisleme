<script setup>
import axios from "axios";
import { ref, reactive, onMounted, watch, watchEffect } from "vue";
import OperationsButtons from "./operationsButtons.vue";
import Median from "./median.vue";
import ArithmeticAverage from "./arithmeticAverage.vue";
import Mode from "./mode.vue";
import FiveNumber from "./fiveNumber.vue";
import AllData from "./allData.vue";
import Outliers from "./outliers.vue";
import Variance from "./variance.vue";
import IQR from "./IQR.vue";
import StandardDeviation from "./standardDeviation.vue";
import histogramChart from "./histogramChart.vue";
import Modal from "./modal.vue";
import boxplot from "./boxplot.vue";
const globalData = reactive({
  colNames: [
    "Date",
    "Time Played",
    "Rank",
    "Mental State",
    "Eliminations",
    "Assists",
    "Revives",
    "Accuracy",
    "Hits",
    "Head Shots",
    "Distance Traveled",
    "Materials Gathered",
    "Materials Used",
    "Damage Taken",
    "Damage to Players",
    "Damage to Structures",
  ],
  allData: {},
  arithmeticAverage: {},
  fiveNumber: {},
  IQR: {},
  median: {},
  mode: {},
  outliers: {},
  standardDeviation: {},
  variance: {},
  frequency: {},
  freqCols: [],
  drawBoxPlot: false,
  drawFreqChart: false,
});

const activeModal = ref(false);
</script>

<template>
  <div class="m-4">
    <h2 class="text-warning">Veri Önişleme Ödevi</h2>
    <OperationsButtons
      :colNames="globalData.colNames"
      :drawBoxPlot.sync="globalData.drawBoxPlot"
      :drawFreqChart.sync="globalData.drawFreqChart"
      @missingData="globalData.allData = $event"
      @missingDataComplete="globalData.allData = $event"
      @mode="globalData.mode = $event"
      @median="globalData.median = $event"
      @arithmeticAverage="globalData.arithmeticAverage = $event"
      @fiveNumber="globalData.fiveNumber = $event"
      @iqr="globalData.IQR = $event"
      @outliers="globalData.outliers = $event"
      @standardDeviation="globalData.standardDeviation = $event"
      @variance="globalData.variance = $event"
      @frequency="globalData.frequency = $event"
      @freqCols="globalData.freqCols = $event"
      @update:drawBoxPlot="globalData.drawBoxPlot = $event"
      @update:drawFreqChart="globalData.drawFreqChart = $event"
    />
    <AllData :colNames="globalData.colNames" :data="globalData.allData" />
    <div class="container-fluid">
      <div class="row">
        <ArithmeticAverage
          :colNames="globalData.colNames"
          :data="globalData.arithmeticAverage"
        />
        <Mode :colNames="globalData.colNames" :data="globalData.mode" />
        <Median :colNames="globalData.colNames" :data="globalData.median" />
        <IQR :colNames="globalData.colNames" :data="globalData.IQR" />
        <FiveNumber
          :colNames="globalData.colNames"
          :data="globalData.fiveNumber"
        />
        <Outliers :colNames="globalData.colNames" :data="globalData.outliers" />
        <Variance :colNames="globalData.colNames" :data="globalData.variance" />
        <StandardDeviation
          :colNames="globalData.colNames"
          :data="globalData.standardDeviation"
        />
      </div>
    </div>

    <Modal
      title="Sütun Grafikleri"
      :active.sync="globalData.drawFreqChart"
      @update:active="activeModal, (globalData.drawFreqChart = $event)"
    >
      <histogramChart
        v-for="col in globalData.freqCols"
        :key="col"
        :col="col"
        :frequency="globalData.frequency[col]"
      />
    </Modal>

    <Modal
      title="Kutu Grafikleri"
      :active.sync="globalData.drawBoxPlot"
      @update:active="activeModal, (globalData.drawBoxPlot = $event)"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-4"
            v-if="Object.keys(globalData.fiveNumber).length > 0"
          >
            <boxplot
              v-for="col in globalData.freqCols"
              :key="col"
              :col="col"
              :fiveNumber="globalData.fiveNumber[col].fiveNumber"
            />
          </div>
          <div v-else>
            <h3 class="text-danger">
              Grafikleri görebilmek için öncelikle Beş Sayı özetini
              hesaplatmanız gerekmektedir.
            </h3>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
