import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import { Pokemon } from "../services/pokemon.model";
import { PokemonService } from "../services/pokemon.service";
import { AppState } from "../../app.reducers";
import { PokemonActions } from "../services/pokemon.actions";

@Component({
  selector: "app-pokemon-details",
  moduleId: module.id,
  templateUrl: "pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon: Pokemon;
  pokemon$: Observable<Pokemon>;
  error$: Observable<any>;
  private sub: Subscription;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute,
              private pokemonActions: PokemonActions,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pokemon$ =  this.store.select<Pokemon>('pokemon', 'selectedItem');
    this.error$ =  this.store.select<any>('pokemon', 'error');
    // TODO: fix template to use async
    this.sub = this.pokemon$.subscribe( (pokemon: Pokemon) => {
        this.pokemon = pokemon;
    });
    const id = this.route.snapshot.params["id"];
    this.store.dispatch(this.pokemonActions.getDetail(id));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.store.dispatch(this.pokemonActions.removeDetail());
  }
}
