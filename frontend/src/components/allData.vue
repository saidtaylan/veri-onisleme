<template>
  <div v-if="Object.keys(data).length > 0" class="container-fluid mb-4 mt-4">
    <h3 class="text-primary mb-5">Tüm Veri Seti</h3>
    <div
      class="row"
      :style="[openDataTab ? {} : { height: '500px', overflow: 'scroll' }]"
    >
      <table class="table">
        <thead>
          <tr>
            <th v-for="col in colNames" :key="col">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item">
            <td v-for="value in item" :key="value">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      style="float: right"
      :class="[openDataTab ? 'btn btn-danger' : 'btn btn-success']"
      @click="openDataTab = !openDataTab"
    >
      {{ openDataTab ? "Daralt" : "Genişlet" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  colNames: Array,
  data: Object,
});

const openDataTab = ref(true);
</script>

<style lang="scss" scoped></style>
