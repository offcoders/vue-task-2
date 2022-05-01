import { Module } from "vuex";
import { CardsStateTypes, IRootState } from "@/store/interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const Cards: Module<CardsStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default Cards;
