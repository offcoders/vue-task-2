<template>
  <q-drawer
    v-model="leftDrawerOpen"
    model-value
    :width="340"
    :breakpoint="991"
    show-if-above
    bordered
    persistent
    no-swipe-close
    no-swipe-backdrop
    class="app-sidebar"
  >
    <q-img class="app-sidebar__img" src="@/assets/Logo.svg" />
    <q-item-label class="q-px-none f-15" header>
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </q-item-label>
    <q-list class="app-sidebar__q-list">
      <router-link
        v-for="menu in menus"
        :key="menu.name"
        :to="menu.path"
        active-class="active"
      >
        <q-item class="q-px-none app-sidebar__item items-center">
          <q-item-section avatar class="nav-menu-icons">
            <q-img :src="menu.icons" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ menu.name }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { ref, Ref } from "vue";
import sidebarMenus from "@/constant/menus";
import { IMenus } from "@/helpers/interface/IMenus";
declare interface BaseComponentData {
  leftDrawerOpen: Ref<boolean>;
  menus: IMenus[];
}

export default {
  name: "SidebarComponent",
  data: function (): BaseComponentData {
    return {
      menus: sidebarMenus,
      leftDrawerOpen: ref(true),
    };
  },
};
</script>

<style>
.nav-menu-icons .q-img__container.absolute-full {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}
</style>
