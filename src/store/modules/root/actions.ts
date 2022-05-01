import { ActionTree } from "vuex";
import { RootActionsTypes, IRootState } from "@/store/interfaces";
import { ROOT_STORE } from "@/store/constants";

export const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
  [ROOT_STORE.ACTIONS.IS_MOBILE_DEVICE]: (context, payload: boolean): void => {
    context.commit(ROOT_STORE.MUTATIONS.IS_MOBILE_DEVICE, payload);
  },
};
