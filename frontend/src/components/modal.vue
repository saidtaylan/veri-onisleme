<template>
  <div
    class="container-fluid shadow-lg p-3 mb-5 bg-white rounded"
    id="body"
    v-if="active"
  >
    <div class="text-warning">
      <h3>{{ title }}</h3>
    </div>
    <div class="row">
      <div class="col">
        <slot />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-dark" @click="close()">Kapat</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["update:active"],

  setup(props, { emit }) {
    const close = () => {
      emit("update:active", false);
    };
    return {
      close,
    };
  },
};
</script>

<style scoped>
#body {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 10%;
  top: 10%;
  width: 80%; /* Full width */
  height: 80%; /* Full height */
  overflow: auto;
}
</style>
