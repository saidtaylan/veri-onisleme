<template>
  <div class="container">
    <button
      type="button"
      v-if="buttonStates.hasFetchedData && !buttonStates.hasFillWithNewData"
      class="btn btn-primary m-2"
      @click="missingDataComplete()"
    >
      Eksik Veri Tamamla
    </button>

    <button
      type="button"
      class="btn btn-success m-2"
      @click="getMissingDataForm()"
      v-if="buttonStates.isOpenFile && !buttonStates.hasFetchedData"
    >
      Eksik Verili Tablo
    </button>

    <button
      type="button"
      class="btn btn-primary m-2"
      @click="saveMissingDataComplete()"
      v-if="buttonStates.hasFillWithNewData"
    >
      Yeni Tabloyu Kaydet
    </button>

    <button
      type="button"
      class="btn btn-warning m-2"
      @click="openFile()"
      v-if="!buttonStates.isOpenFile"
    >
      Dosyayı Aç
    </button>

    <div v-if="buttonStates.hasFetchedData">
      <h3>Hesaplamalar</h3>
      <button
        type="button"
        class="btn btn-primary m-2"
        @click="arithmeticAverage()"
      >
        Aritmetik Ortalama
      </button>
      <button type="button" class="btn btn-primary m-2" @click="findMedian()">
        Medyan
      </button>
      <button type="button" class="btn btn-primary m-2" @click="findMode()">
        Mod
      </button>

      <button class="btn btn-primary m-2" @click="findIQR()">IQR</button>
      <button class="btn btn-primary m-2" @click="findOutliers()">
        Aykırı Değerler
      </button>
      <button class="btn btn-primary m-2" @click="findFiveNumber()">
        Beş Sayı Özeti
      </button>
      <button class="btn btn-primary m-2" @click="findVariance()">
        Varyans
      </button>
      <button class="btn btn-primary m-2" @click="findStandardDeviation()">
        Standart Sapma
      </button>
      <hr />
      <div class="row" style="justify-content: space-around">
        <div class="col-md-4 d-flex" style="justify-content: space-around">
          <span
            class="m-4"
            v-for="col in colNames"
            :key="col"
            v-show="
              col !== 'Date' && col !== 'Time Played' && col != 'Mental State'
            "
          >
            <label :for="'id' + col">{{ col }}</label>
            <input
              type="checkbox"
              :id="'id-' + col"
              name="freqCol"
              :value="col"
              v-model="freqCols"
            />
          </span>
        </div>
      </div>
      <button class="btn btn-success" @click="boxPlot()">Kutu Grafiği</button>
      <button class="btn btn-warning" @click="findFrequency()">
        Frekans Tabloları
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { getCurrentInstance, reactive, ref } from "vue";

const { emit } = getCurrentInstance();

defineEmits([
  "missingData",
  "missingDataComplete",
  "mode",
  "arithmeticAverage",
  "fiveNumber",
  "iqr",
  "outliers",
  "standardDeviation",
  "median",
  "variance",
  "frequency",
  "freqCols",
  "update:drawBoxPlot",
  "update:drawFreqChart",
]);

const freqCols = ref([]);

const buttonStates = reactive({
  isOpenFile: false,
  hasFetchedData: false,
  hasFillWithNewData: false,
});

const openFile = async () => {
  let status = await axios.get("http://127.0.0.1:8000/get-file");
  if (status.data === 0) {
    alert("Dosya açılamadı.");
  } else if (status.data === 1) {
    alert("Dosya başarıyla açıldı");
    buttonStates.isOpenFile = true;
  }
};

defineProps({
  colNames: Object,
  drawBoxPlot: Boolean,
  drawFreqChart: Boolean,
});

const getMissingDataForm = async () => {
  let res = await axios.get("http://127.0.0.1:8000/missing-data-form");
  buttonStates.hasFetchedData = true;
  emit("missingData", res.data);
};

const missingDataComplete = async () => {
  let res = await axios.get("http://127.0.0.1:8000/missing-data-complete");
  emit("missingDataComplete", res.data);
  buttonStates.hasFillWithNewData = true;
};

const saveMissingDataComplete = async () => {
  let res = await axios.get("http://127.0.0.1:8000/save-missing-data-complete");
  if (res.data === 1)
    alert("Eksik verileri tamamlanmış dosya başarıyla oluşturuldu.");
  else alert("Dosya oluşturulamadı");
};

const findMode = async () => {
  let res = await axios.get("http://127.0.0.1:8000/find-mode");
  emit("mode", res.data);
};

const arithmeticAverage = async () => {
  let res = await axios.get("http://127.0.0.1:8000/arithmetic-avg");
  emit("arithmeticAverage", res.data);
};

const findFiveNumber = async () => {
  let res = await axios.get("http://127.0.0.1:8000/get-five-number");
  emit("fiveNumber", res.data);
};

const findIQR = async () => {
  let res = await axios.get("http://127.0.0.1:8000/get-iqr");
  emit("iqr", res.data);
};

const findOutliers = async () => {
  let res = await axios.get("http://127.0.0.1:8000/find-outliers");
  emit("outliers", res.data);
};

const findStandardDeviation = async () => {
  let res = await axios.get("http://127.0.0.1:8000/standard-deviation");
  emit("standardDeviation", res.data);
};

const findMedian = async () => {
  let res = await axios.get("http://127.0.0.1:8000/find-median");
  emit("median", res.data);
};

const findVariance = async () => {
  let res = await axios.get("http://127.0.0.1:8000/find-variance");
  emit("variance", res.data);
};

const findFrequency = async () => {
  let res = await axios.get("http://127.0.0.1:8000/get-frequency");
  emit("frequency", res.data);
  emit("freqCols", freqCols.value);
  emit("update:drawFreqChart", true);
};

const boxPlot = () => {
  emit("update:drawBoxPlot", true);
  emit('freqCols', freqCols.value)
};
</script>
