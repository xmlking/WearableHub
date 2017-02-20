import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@ngrx/router-store';

import { itemsReducer } from "./item/services/item.reducer";
import { Item } from "./item/services/item.model";

export interface AppState {
  items: Item[];
  router: RouterState;
}

export const rootReducer = {
  items: itemsReducer,
  router: routerReducer
};

