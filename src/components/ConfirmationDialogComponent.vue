<template>
  <q-dialog v-model="prompt" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"><slot /></span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" @click="$emit('close')" />
        <q-btn flat label="Yes" color="primary" @click="$emit('ok')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "confirm-dialog",
  setup() {
    return {
      prompt: ref(false),
    };
  },
  props: {
    isOpen: Boolean,
  },
  watch: {
    isOpen: {
      handler: function (newValue): void {
        this.prompt = newValue;
      },
      deep: true,
    },
  },
  methods: {
    close(): void {
      this.prompt = false;
      this.$emit("close");
    },
  },
});
</script>
