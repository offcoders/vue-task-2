<template>
  <button @click="$emit('onClick')" class="btn btn-custom">
    <slot />
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "additional-button",
  props: {
    name: String,
  },
});
</script>
