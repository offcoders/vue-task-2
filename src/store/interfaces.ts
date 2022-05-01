import { Cards } from "@/helpers/@types";
import { ICards } from "@/helpers/interface/ICards";
import { ActionContext, DispatchOptions } from "vuex";
import { CARDS_STORE, ROOT_STORE } from "./constants";

export interface IRootState {
  isMobile: boolean;
}

export interface IMergedState extends IRootState {
  CardsModule: CardsStateTypes;
}

export interface IRootGettersTypes {
  [ROOT_STORE.GETTERS.IS_MOBILE_DEVICE](state: IRootState): boolean;
}

export type RootMutationsTypes = {
  [ROOT_STORE.MUTATIONS.IS_MOBILE_DEVICE](
    state: IRootState,
    payload: boolean
  ): void;
};

/**
 * probably this can be moved inside individual module
 * as CardsTypes.ts and then can be imported here
 */
type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit"> & {
    dispatch<K extends keyof StoreActions>(
      key: K,
      payload?: Parameters<StoreActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<StoreActions[K]>;
  };

export interface RootActionsTypes {
  [ROOT_STORE.ACTIONS.IS_MOBILE_DEVICE](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
}

/*********************** Cards MODULE TYPES  ***********************/
export interface CardsStateTypes {
  Cards: Cards;
  rootDispatch?: boolean;
}

export interface CardsGettersTypes {
  [CARDS_STORE.GETTERS.ALL_CARDS](state: CardsStateTypes): Cards;
}

export type CardsMutationsTypes<S = CardsStateTypes> = {
  [CARDS_STORE.MUTATIONS.ADD_CARD](state: S, payload: ICards): void;
  [CARDS_STORE.MUTATIONS.SET_FREEZE](state: S, payload: number): void;
  [CARDS_STORE.MUTATIONS.MARK_CANCEL](state: S, payload: number): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CardsMutationsTypes>(
    key: K,
    payload: Parameters<CardsMutationsTypes[K]>[1]
  ): ReturnType<CardsMutationsTypes[K]>;
} & Omit<ActionContext<CardsStateTypes, IRootState>, "commit">;
export interface CardsActionsTypes {
  [CARDS_STORE.ACTIONS.ADD_CARD](
    { commit }: AugmentedActionContext,
    payload: ICards
  ): void;
  [CARDS_STORE.ACTIONS.SET_FREEZE](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [CARDS_STORE.ACTIONS.MARK_CANCEL](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export interface StoreActions extends RootActionsTypes, CardsActionsTypes {}

export interface StoreGetters extends IRootGettersTypes, CardsGettersTypes {}
