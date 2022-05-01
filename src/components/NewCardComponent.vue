<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <Form
        @submit="submitForm"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <q-card-section>
          <div class="text-h6">Card Number</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <Field name="cardNumber" type="text" class="form-control" />
          <div class="invalid-feedback">{{ errors.cardNumber }}</div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn type="button" flat label="Cancel" @click="close" />
          <q-btn type="submit" flat label="Add card" />
        </q-card-actions>
      </Form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { ref } from "vue";
import { useStore } from "@/use/useStore";
import { ICards } from "@/helpers/interface/ICards";
import { CARDS_STORE } from "@/store/constants";

interface ICreditForm {
  cardNumber: string;
}
export type CreditData = ICreditForm;

export default defineComponent({
  name: "add-card",
  setup() {
    const store = useStore();
    const schema = Yup.object().shape({
      cardNumber: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(16, "Must be exactly 16 digits")
        .max(16, "Must be exactly 16 digits"),
    });

    async function saveNewCard(data: ICards) {
      await store.dispatch(CARDS_STORE.ACTIONS.ADD_CARD, data);
    }

    return {
      prompt: ref(false),
      address: ref(""),
      schema,
      saveNewCard,
    };
  },
  components: {
    Field,
    Form,
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
    submitForm(value: CreditData) {
      const card = this.createNewCard(value.cardNumber);
      this.saveNewCard(card);
      this.$emit("close");
    },
    createNewCard(cardNumber: string): ICards {
      return {
        number: cardNumber,
        thru: "12/20",
        name: "John Doe",
        showNumber: false,
        freeze: false,
        cancel: false,
        id: Math.random(),
      };
    },
  },
});
</script>
