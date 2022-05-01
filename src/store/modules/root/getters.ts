import { ROOT_STORE } from "@/store/constants";
import { GetterTree } from "vuex";
import { IRootGettersTypes, IRootState } from "./../../interfaces";

export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
  [ROOT_STORE.GETTERS.IS_MOBILE_DEVICE]: (state: IRootState): boolean => {
    return state.isMobile;
  },
};
