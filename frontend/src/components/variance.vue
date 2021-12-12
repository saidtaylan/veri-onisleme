<template>
  <div v-if="Object.keys(data).length > 0">
    <h3 class="text-primary mb-5">Varyans Değerleri</h3>
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
           <span v-if="item === 'Accuracy'">{{ item.variance + "%" }}</span>
            <span v-else>{{ item.variance }}</span>
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
