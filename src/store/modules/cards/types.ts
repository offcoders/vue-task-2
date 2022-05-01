import {
  CardsStateTypes,
  CardsMutationsTypes,
  CardsGettersTypes,
  CardsActionsTypes,
} from "@/store/interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type CardsStoreModuleTypes<S = CardsStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof CardsMutationsTypes,
    P extends Parameters<CardsMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CardsMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof CardsGettersTypes]: ReturnType<CardsGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof CardsActionsTypes>(
    key: K,
    payload?: Parameters<CardsActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CardsActionsTypes[K]>;
};
