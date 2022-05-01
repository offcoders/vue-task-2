<template>
  <q-layout view="lHh Lpr lFf">
    <side-bar />
    <q-page-container>
      <div class="main-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SidebarComponent from "@/components/common/SidebarComponent.vue";
export default {
  name: "LayoutDefault",
  components: {
    "side-bar": SidebarComponent,
  },
};
</script>
