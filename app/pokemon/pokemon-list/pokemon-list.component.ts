import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Pokemon } from "../services/pokemon.model";
import { PokemonService } from "../services/pokemon.service";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { PokemonActions } from "../services/pokemon.actions";
import { PokemonState } from "../services/pokemon.reducer";

@Component({
  selector: "app-pokemon-list",
  moduleId: module.id,
  templateUrl: "pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<any>;
  pokemon$: Observable<Pokemon[]>;
  count$: Observable<number>;

  constructor(private pokemonService: PokemonService,
              private pokemonActions: PokemonActions,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ =  this.store.select<boolean>("pokemon", "loading");
    this.error$ =  this.store.select<any>("pokemon", "error");
    this.pokemon$ =  this.store.select<Pokemon[]>("pokemon", "items");
    this.count$ =  this.store.select<number>("pokemon", "count");
    this.store.dispatch(this.pokemonActions.load({ offset: 0, limit: 8}));
  }
}
