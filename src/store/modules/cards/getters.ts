import { Cards } from "@/helpers/@types";
import { CARDS_STORE } from "@/store/constants";
import { GetterTree } from "vuex";
import {
  CardsGettersTypes,
  CardsStateTypes,
  IRootState,
} from "./../../interfaces";

export const getters: GetterTree<CardsStateTypes, IRootState> &
  CardsGettersTypes = {
  [CARDS_STORE.GETTERS.ALL_CARDS]: (state: CardsStateTypes): Cards => {
    return state.Cards?.filter((item) => !item.cancel) || [];
  },
};
