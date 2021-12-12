<template>
  <div v-if="Object.keys(data).length > 0" class="container-fluid">
    <h3 class="text-primary mb-5">Aykırı Değerler</h3>
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="col in colNames"
            :key="col"
            v-show="
              col !== 'Date' && col !== 'Time Played' && col !== 'Mental State'
            "
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="item in data" :key="item">
            <span v-for="outlier in item.outliers" :key="outlier">
              <span v-if="item === 'Accuracy'">{{ outlier + "%" }},</span>
              <span v-else>{{ outlier }},</span></span
            >
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
