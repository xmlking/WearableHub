import { Action, ActionReducer } from "@ngrx/store";

import { Item } from "./item.model";


const initialState = [
  <Item>{ id: 0, name: "Sumo", role: "Goalkeeper" },
];

export const ITEMS_RELOAD = "ITEMS_RELOAD";
export const ITEMS_ADD_MANY = "ITEMS_ADD_MANY";


export function itemsReducer(state = initialState, action: Action): Item[] {

  switch (action.type) {
    case ITEMS_RELOAD:
      return action.payload;
    case ITEMS_ADD_MANY:
      return [...state, ...action.payload];
    default:
      return state;
  }

}
