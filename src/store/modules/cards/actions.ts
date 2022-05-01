import { ActionTree } from "vuex";
import {
  CardsActionsTypes,
  CardsStateTypes,
  IRootState,
} from "@/store/interfaces";
import { CARDS_STORE } from "@/store/constants";
import { ICards } from "@/helpers/interface/ICards";

export const actions: ActionTree<CardsStateTypes, IRootState> &
  CardsActionsTypes = {
  [CARDS_STORE.ACTIONS.ADD_CARD]({ commit }, payload: ICards) {
    commit(CARDS_STORE.MUTATIONS.ADD_CARD, payload);
  },
  [CARDS_STORE.ACTIONS.SET_FREEZE]({ commit }, payload: number) {
    commit(CARDS_STORE.MUTATIONS.SET_FREEZE, payload);
  },
  [CARDS_STORE.ACTIONS.MARK_CANCEL]({ commit }, payload: number) {
    commit(CARDS_STORE.MUTATIONS.MARK_CANCEL, payload);
  },
};
