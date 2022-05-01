<template>
  <q-carousel
    animated
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    :autoplay="false"
    control-color="primary"
    navigation
    :arrows="false"
  >
    <q-carousel-slide
      v-for="(card, i) in cards"
      :key="card.number"
      :name="i"
      class="column no-wrap"
    >
      <credit-card :card="card" />
    </q-carousel-slide>
    <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      <q-btn
        v-if="active"
        size="lg"
        :icon="btnProps.icon"
        color="yellow"
        flat
        class="active_dot"
        round
        dense
        @click="onClick"
      />
      <q-btn
        v-else
        size="sm"
        :icon="btnProps.icon"
        flat
        round
        dense
        @click="onClick"
      />
    </template>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import CreditCardComponent from "@/components/CreditCardComponent.vue";
import { ICards } from "@/helpers/interface/ICards";
export default defineComponent({
  name: "credit-card-slider",
  components: {
    "credit-card": CreditCardComponent,
  },
  props: {
    cards: {
      type: Object as PropType<ICards[]>,
      required: true,
    },
    activeSlide: Number,
  },
  setup() {
    return {
      slide: ref(0),
    };
  },
  watch: {
    slide() {
      this.$emit("onSlide", this.slide);
    },
  },
});
</script>
