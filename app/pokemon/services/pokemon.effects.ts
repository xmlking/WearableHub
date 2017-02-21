import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { Filters, PokemonActions } from "./pokemon.actions";
import { PokemonService } from './pokemon.service';
import { Pokemon } from "./pokemon.model";

@Injectable()

export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonActions: PokemonActions,
    private pokemonService: PokemonService
  ) { }

  @Effect() load$ = this.actions$
    .ofType(PokemonActions.LOAD)
    .map(action => action.payload)
    .switchMap((filters: Filters) => this.pokemonService.list(filters)
      .mergeMap((res) => Observable.of(
        this.pokemonActions.loadSuccess(res.items, res.meta.count, filters)
        )
      )
      .catch((err) => Observable.of(
        this.pokemonActions.loadFail(err)
      ))
    );

  @Effect() getDetail$ = this.actions$
    .ofType(PokemonActions.GET_DETAIL)
    .map(action => action.payload)
    .switchMap((itemId: number) => this.pokemonService.get(itemId)
      .mergeMap((res: Pokemon) => Observable.of(
        this.pokemonActions.getDetailSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.pokemonActions.getDetailFail(err)
      ))
    );
}
