import {
  RootGetters,
  RootMutations,
  RootActions,
  CardsGetters,
  CardsMutations,
  CardsActions,
} from "./enums";

export const ROOT_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions,
};

export const CARDS_STORE = {
  GETTERS: CardsGetters,
  MUTATIONS: CardsMutations,
  ACTIONS: CardsActions,
};
