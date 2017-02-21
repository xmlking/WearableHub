import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@ngrx/router-store';

import { PokemonState, pokemonReducer } from "./pokemon/services/pokemon.reducer";
import { itemsReducer } from "./item/services/item.reducer";
import { Item } from "./item/services/item.model";

export interface AppState {
  pokemon: PokemonState;
  items: Item[];
  router: RouterState;
}

export const rootReducer = {
  pokemon: pokemonReducer,
  items: itemsReducer,
  router: routerReducer
};

