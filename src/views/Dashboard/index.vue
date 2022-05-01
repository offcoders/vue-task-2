<template>
  <div class="home-page">
    <div class="home-page__topbar">
      <div class="balance">
        <h6>Available balance</h6>
        <div class="subheaading">
          <span>S$</span>
          <h2>3,000</h2>
        </div>
      </div>
      <div class="new-card">
        <div class="m-logo"><q-img src="@/assets/MLogo.svg" /></div>
        <button @click="addDialogOpen">
          <q-icon name="add_circle" /> New card
        </button>
        <add-card :isOpen="addCardDialog" @close="addCardDialog = false" />
        <confirm-dialog
          :isOpen="isConfirm"
          @close="isConfirm = false"
          @ok="
            isConfirm = false;
            confirmCancelCard();
          "
        >
          Are you sure want to delete ?
        </confirm-dialog>
      </div>
    </div>

    <div class="home-page__body">
      <q-tabs
        v-model="tab"
        dense
        align="left"
        class="tabs-nav-list"
        :breakpoint="0"
      >
        <q-tab name="my_card" label="My debit cards" />
        <q-tab name="company_card" label="All company cards" />
      </q-tabs>

      <q-card class="q-card-section">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="my_card">
            <div class="q-pa-md">
              <div class="row">
                <!--left part  -->
                <div class="col-12 col-md-7 left_part_view">
                  <div class="q-gutter-sm credit-sliders">
                    <credit-card-slider
                      ref="slider"
                      :cards="cards"
                      @on-slide="onSlideChange"
                    />
                  </div>

                  <div class="additional_buttons">
                    <div
                      class="additional_buttons additional_inside"
                      v-if="typeof cards[activeSlide] !== 'undefined'"
                    >
                      <additional-button
                        @on-click="freezeToggle"
                        :name="
                          cards[activeSlide].freeze
                            ? `UnFreeze Card`
                            : 'Freeze card'
                        "
                      >
                        <q-img src="@/assets/Freeze_card.svg" />
                      </additional-button>
                      <additional-button name="Set spend limit">
                        <q-img src="@/assets/Set_spend_limit.svg" />
                      </additional-button>
                      <additional-button name="Add to GPay">
                        <q-img src="@/assets/GPay.svg" />
                      </additional-button>
                      <additional-button name="Replace card">
                        <q-img src="@/assets/Replace_card.svg" />
                      </additional-button>
                      <additional-button
                        @on-click="cancelCard"
                        name="Cancel card"
                      >
                        <q-img src="@/assets/Deactivate_card.svg" />
                      </additional-button>
                    </div>
                  </div>
                </div>
                <!-- right part -->
                <div class="col-12 col-md-5 right_part_view">
                  <home-accordion />
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="company_card">
            <div class="text-h6">Company</div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import HomeAccordion from "@/views/Dashboard/HomeAccordion.vue";
import CreditCardSlider from "@/views/Dashboard/CreditCardSlider.vue";
import AdditionalButtonComponent from "@/components/AdditionalButtonComponent.vue";
import NewCardComponent from "@/components/NewCardComponent.vue";
import { useStore } from "@/use/useStore";
import { CARDS_STORE } from "@/store/constants";
import ConfirmationDialogComponentVue from "@/components/ConfirmationDialogComponent.vue";
export default defineComponent({
  name: "main-dashboard",
  components: {
    "home-accordion": HomeAccordion,
    "credit-card-slider": CreditCardSlider,
    "additional-button": AdditionalButtonComponent,
    "add-card": NewCardComponent,
    "confirm-dialog": ConfirmationDialogComponentVue,
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.getters[CARDS_STORE.GETTERS.ALL_CARDS]);

    async function markFreeze(slideIndex: number) {
      await store.dispatch(CARDS_STORE.ACTIONS.SET_FREEZE, slideIndex);
    }

    async function markCancel(slideIndex: number) {
      await store.dispatch(CARDS_STORE.ACTIONS.MARK_CANCEL, slideIndex);
    }

    return {
      tab: ref<string>("my_card"),
      addCardDialog: ref<boolean>(false),
      isConfirm: ref<boolean>(false),
      cards,
      markFreeze,
      markCancel,
    };
  },
  data() {
    return {
      activeSlide: 0,
    };
  },
  methods: {
    freezeToggle(): void {
      this.markFreeze(this.activeSlide);
    },
    cancelCard(): void {
      this.isConfirm = true;
    },
    confirmCancelCard(): void {
      this.markCancel(this.activeSlide);
      this.activeSlide = 0;
    },
    addDialogOpen(): void {
      this.addCardDialog = true;
    },
    onSlideChange(slideIndex: number): void {
      this.activeSlide = slideIndex;
    },
  },
});
</script>
