import { Action, ActionReducer } from "@ngrx/store";

import { Item } from "./item.model";


const initialState = [
  <Item>{ id: 1, name: "Ter Stegen", role: "Goalkeeper" },
  <Item>{ id: 3, name: "Piqué", role: "Defender" },
  <Item>{ id: 4, name: "I. Rakitic", role: "Midfielder" },
  <Item>{ id: 5, name: "Sergio", role: "Midfielder" },
  <Item>{ id: 6, name: "Denis Suárez", role: "Midfielder" },
  <Item>{ id: 7, name: "Arda", role: "Midfielder" },
  <Item>{ id: 8, name: "A. Iniesta", role: "Midfielder" },
  <Item>{ id: 9, name: "Suárez", role: "Forward" },
  <Item>{ id: 10, name: "Messi", role: "Forward" },
  <Item>{ id: 11, name: "Neymar", role: "Forward" },
  <Item>{ id: 12, name: "Rafinha", role: "Midfielder" },
  <Item>{ id: 13, name: "Cillessen", role: "Goalkeeper" },
  <Item>{ id: 14, name: "Mascherano", role: "Defender" },
  <Item>{ id: 17, name: "Paco Alcácer", role: "Forward" },
  <Item>{ id: 18, name: "Jordi Alba", role: "Defender" },
  <Item>{ id: 19, name: "Digne", role: "Defender" },
  <Item>{ id: 20, name: "Sergi Roberto", role: "Midfielder" },
  <Item>{ id: 21, name: "André Gomes", role: "Midfielder" },
  <Item>{ id: 22, name: "Aleix Vidal", role: "Midfielder" },
  <Item>{ id: 23, name: "Umtiti", role: "Defender" },
  <Item>{ id: 24, name: "Mathieu", role: "Defender" },
  <Item>{ id: 25, name: "Masip", role: "Goalkeeper" }
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
