<script setup>
import axios from "axios";
import { ref, reactive } from "vue";

defineProps({
  msg: String,
});

const globalData = reactive({
  allData: {},
  arithmeticAvg : {},
  median: {},
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
});

const getFile = async () => {
  let status = await axios.get("http://127.0.0.1:8000/get-file");
  if (status.data === 0) {
    alert("Dosya açılamadı.");
  } else if (status.data === 1) {
    alert("Dosya başarıyla açıldı");
  }
};

const missingDataComplete = async () => {
  let data = await axios.get("http://127.0.0.1:8000/missing-data-complete");
  globalData.allData = data.data;
};

const getMissingDataForm = async () => {
  let data = await axios.get("http://127.0.0.1:8000/missing-data-form");
  globalData.allData = data.data;
};

const saveMissingDataComplete = async () => {
  let data = await axios.get(
    "http://127.0.0.1:8000/save-missing-data-complete"
  );
  if (data.data === 1)
    alert("Eksik verileri tamamlanmış dosya başarıyla oluşturuldu.");
};

const arithmeticAverage = async () => {
  let data = await axios.get("http://127.0.0.1:8000/arithmetic-avg")
  globalData.arithmeticAvg = data.data
}

const findMedian = async() => {
  let data = await axios.get("http://127.0.0.1:8000/find-median")
  globalData.median = data.data
}
</script>

<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      @click="missingDataComplete()"
    >
      Eksik Veri Tamamla
    </button>

    <button type="button" class="btn btn-success" @click="getMissingDataForm()">
      Eksik Verili Tablo
    </button>
    <button type="button" class="btn btn-warning" @click="getFile()">
      Dosyayı Aç
    </button>
    <table border="2" v-if="Object.keys(globalData.allData).length > 0">
      <thead>
        <tr>
          <th v-for="col in globalData.colNames" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in globalData.allData" :key="data">
          <td v-for="col in data" :key="col">{{ col }}</td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-success"
      @click="saveMissingDataComplete()"
    >
      Yeni Tabloyu Kaydet
    </button>
    <h3>Hesaplamalar</h3>
    <hr>
    <button type="button" class="btn btn-primary" @click="arithmeticAverage()">Aritmetik Ortalama</button>
    <button type="button" class="btn btn-primary" @click="findMedian()">Medyan</button>
    <table border="2" v-if="Object.keys(globalData.arithmeticAvg).length > 0">
      <thead>
        <tr>
          <th v-for="col in globalData.colNames" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="data in globalData.arithmeticAvg" :key="data">{{data.avg}}</td>
        </tr>
      </tbody>
    </table>

    <table border="2" v-if="Object.keys(globalData.median).length > 0">
      <thead>
        <tr>
          <th v-for="col in globalData.colNames" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="data in globalData.median" :key="data">{{data.med}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
