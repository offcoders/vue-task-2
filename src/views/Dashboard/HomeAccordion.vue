<template>
  <q-list padding bordered class="rounded-borders">
    <q-expansion-item>
      <template v-slot:header>
        <q-img src="@/assets/card_detail.svg" />
        <q-item-section> Card details </q-item-section>
      </template>
    </q-expansion-item>

    <q-expansion-item>
      <template v-slot:header>
        <q-img src="@/assets/recent_transaction.svg" />
        <q-item-section> Recent transactions</q-item-section>
      </template>

      <q-card>
        <div class="all_transactions">
          <q-list
            v-for="transaction in transactions"
            :key="transaction.id"
            class="transactions_lists"
          >
            <div :class="`left ${transaction.type}`">
              <span>
                <q-img
                  v-if="transaction.type === 'primary'"
                  src="@/assets/transaction-primary.svg"
                />
                <q-img
                  v-else-if="transaction.type === 'danger'"
                  src="@/assets/transaction-danger.svg"
                />
                <q-img
                  v-else-if="transaction.type === 'success'"
                  src="@/assets/transaction-success.svg"
                />
              </span>
            </div>
            <div class="center">
              <h5>{{ transaction.name }}</h5>
              <p>{{ momentFormat(transaction.date, "Do MMM YYYY") }}</p>
              <button>
                <span><q-img src="@/assets/business-and-finance.svg" /></span>
                Refund on debit card
              </button>
            </div>
            <div class="right">
              <button :class="{ 'dark-text': transaction.amount < 0 }">
                {{ calcAmount(transaction) }}
                <q-icon name="arrow_forward_ios" />
              </button>
            </div>
          </q-list>
        </div>
      </q-card>

      <div class="all_transactions_data">
        <button>View all card transactions</button>
      </div>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import fakeTransactions from "@/constant/transactions";
import { ITransactions } from "@/helpers/interface/ITransactions";
import globalMixins from "@/helpers/mixins/globalMixins";

declare interface BaseComponentData {
  tab: Ref<string>;
  transactions: ITransactions[];
}

export default defineComponent({
  name: "home-accordion",
  setup(): BaseComponentData {
    return {
      tab: ref<string>("my_card"),
      transactions: fakeTransactions,
    };
  },
  mixins: [globalMixins],
  methods: {
    calcAmount(transaction: ITransactions) {
      return transaction.amount >= 0
        ? `+${transaction.currency} ${Math.abs(transaction.amount)}`
        : `-${transaction.currency} ${Math.abs(transaction.amount)}`;
    },
  },
});
</script>
