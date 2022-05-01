import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { CardsStoreModuleTypes } from "./modules/cards/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  CardsModule: CardsStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CardsStoreModuleTypes<Pick<StoreModules, "CardsModule">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;
