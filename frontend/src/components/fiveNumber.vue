<template>
  <div v-if="Object.keys(data).length > 0">
    <h3 class="text-primary mb-5">Beş Sayı Özeti</h3>
    <table border="2">
      <thead>
        <tr>
          <th
            v-for="col in colNames"
            :key="col"
            v-show="
              col !== 'Date' && col !== 'Time Played' && col !== 'Mental State'
            "
          >{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="item in data" :key="item">
            <div v-for="(value, key) in item.fiveNumber" :key="value">
              <span v-if="key === 'min'">Min: {{ value }}</span>
              <span v-else-if="key === 'Q1'">Q1: {{ value }}</span>
              <span v-else-if="key === 'median'">Medyan: {{ value }}</span>
              <span v-else-if="key === 'Q3'">Q3: {{ value }}</span>
              <span v-else-if="key === 'max'">Max: {{ value }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  colNames: Array,
  data: Object,
});
</script>

<style lang="scss" scoped></style>
