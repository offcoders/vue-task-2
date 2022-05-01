<template>
  <section>
    <div class="show-number">
      <button @click="showNumber = !showNumber">
        <span class="material-icons"> visibility </span>
        {{ !showNumber ? "Show card number" : "Hide card number" }}
      </button>
    </div>
    <div class="credit-card" :class="{ 'credit-card__freeze': card.freeze }">
      <q-img class="credit-card__logo" src="@/assets/Logo_Light.svg" />
      <div class="credit-card__body">
        <h4>{{ card.name }}</h4>
        <div class="credit-card__body__number">
          {{ highlightNumber(card.number) }}
        </div>
        <div class="credit-card__body__extra">
          <div>Thru: {{ card.thru }}</div>
          <div>CVV: <span>* * *</span></div>
        </div>
        <div class="card_type">
          <q-img src="@/assets/Visa_Logo.svg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ICards } from "@/helpers/interface/ICards";
export default defineComponent({
  name: "credit-card",
  props: {
    card: {
      type: Object as PropType<ICards>,
      required: true,
    },
  },
  data() {
    return {
      showNumber: false,
    };
  },
  methods: {
    highlightNumber(cardNumber: string): string {
      return this.showNumber
        ? cardNumber
        : `•••• •••• •••• ${cardNumber.substr(cardNumber.length - 4)}`;
    },
  },
});
</script>
