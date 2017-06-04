import { routerReducer } from "@ngrx/router-store";
import { RouterState } from "@ngrx/router-store";

import { PokemonState, pokemonReducer } from "./pokemon/services/pokemon.reducer";

export interface AppState {
  pokemon: PokemonState;
  router: RouterState;
}

export const rootReducer = {
  pokemon: pokemonReducer,
  router: routerReducer
};

