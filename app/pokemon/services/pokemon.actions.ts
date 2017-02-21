import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Pokemon } from './pokemon.model';

export type Filters = {
  limit: number,
  offset: number
};

@Injectable()
export class PokemonActions {
  static LOAD = '[Pokemon] Load';
  load(filters: Filters): Action {
    return {
      type: PokemonActions.LOAD,
      payload: filters
    };
  }

  static LOAD_SUCCESS = '[Pokemon] Load Success';
  loadSuccess(items: [Pokemon], count: number, filters: Filters): Action {
    return {
      type: PokemonActions.LOAD_SUCCESS,
      payload: {items, count, filters}
    };
  }

  static LOAD_FAIL = '[Pokemon] Load Fail';
  loadFail(err: Error): Action {
    return {
      type: PokemonActions.LOAD_FAIL,
      payload: err
    };
  }

  static GET_DETAIL = '[Pokemon] Get Detail';
  getDetail(itemId: number): Action {
    return {
      type: PokemonActions.GET_DETAIL,
      payload: itemId
    };
  }

  static REMOVE_DETAIL = '[Pokemon] Remove Detail';
  removeDetail(): Action {
    return {
      type: PokemonActions.REMOVE_DETAIL
    };
  }

  static GET_DETAIL_SUCCESS = '[Pokemon] Get Detail Success';
  getDetailSuccess(item: Pokemon): Action {
    return {
      type: PokemonActions.GET_DETAIL_SUCCESS,
      payload: item
    };
  }

  static GET_DETAIL_FAIL = '[Pokemon] Get Detail Fail';
  getDetailFail(err: Error): Action {
    return {
      type: PokemonActions.GET_DETAIL_FAIL,
      payload: err
    };
  }
}
