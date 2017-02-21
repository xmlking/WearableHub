import { Action, ActionReducer } from "@ngrx/store";

import { Pokemon } from "./pokemon.model";
import { Filters, PokemonActions } from "./pokemon.actions";

export interface PokemonState {
  items: [Pokemon];
  count: number;
  filters: Filters;
  loaded: boolean;
  loading: boolean;
  selectedItem: Pokemon;
  error?: any;
}

const initialState: PokemonState = {
  // items: [
  //   <Pokemon>{ id: 0, name: "Sumo", types: [], stats: [] },
  // ],
  items: undefined,
  count: 0,
  filters: { offset: 0, limit: 8},
  loaded: false,
  loading: false,
  selectedItem: new Pokemon(),
  error: undefined
};


export function pokemonReducer(state = initialState, action: Action): PokemonState {
  switch (action.type) {
    case PokemonActions.LOAD:
      return {...state, ...{ loading: true } };
    case PokemonActions.LOAD_SUCCESS:
      return {...state, ...{
        items: action.payload.items,
        count: action.payload.count,
        filters: action.payload.filters,
        loaded: true,
        loading: false
      } };
    case PokemonActions.LOAD_FAIL:
      return {...state, ...{
        error: action.payload,
        loaded: false,
        loading: false
      } };
    case PokemonActions.GET_DETAIL_SUCCESS:
      return {...state, ...{ selectedItem: action.payload } };
    case PokemonActions.GET_DETAIL_FAIL:
      return {...state, ...{ error: action.payload } };
    case PokemonActions.REMOVE_DETAIL:
      return {...state, ...{ selectedItem: new Pokemon() } };
    default:
      return state;
  }

}
