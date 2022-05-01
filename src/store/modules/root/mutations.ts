import { MutationTree } from "vuex";
import { RootMutationsTypes, IRootState } from "./../../interfaces";
import { ROOT_STORE } from "@/store/constants";

export const mutations: MutationTree<IRootState> & RootMutationsTypes = {
  [ROOT_STORE.MUTATIONS.IS_MOBILE_DEVICE](state, payload: boolean) {
    state.isMobile = payload;
  },
};
