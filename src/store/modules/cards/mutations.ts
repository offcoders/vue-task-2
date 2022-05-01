import { MutationTree } from "vuex";
import { CardsMutationsTypes, CardsStateTypes } from "./../../interfaces";
import { CARDS_STORE } from "@/store/constants";
import { ICards } from "@/helpers/interface/ICards";

export const mutations: MutationTree<CardsStateTypes> & CardsMutationsTypes = {
  [CARDS_STORE.MUTATIONS.ADD_CARD](state, payload: ICards) {
    return state.Cards?.push(payload);
  },
  [CARDS_STORE.MUTATIONS.SET_FREEZE](state, payload: number) {
    return state.Cards?.map((item, i) =>
      payload === i ? (item.freeze = !item.freeze) : item
    );
  },
  [CARDS_STORE.MUTATIONS.MARK_CANCEL](state, payload: number) {
    return state.Cards?.splice(payload, 1);
  },
};
