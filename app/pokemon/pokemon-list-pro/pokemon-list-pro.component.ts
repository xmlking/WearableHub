import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import * as timerModule  from "timer";

import { Pokemon } from "../services/pokemon.model";
import { PokemonService } from "../services/pokemon.service";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { PokemonActions } from "../services/pokemon.actions";
import { PokemonState } from "../services/pokemon.reducer";
import { ListViewEventData } from "nativescript-telerik-ui/listview";

@Component({
  selector: "app-pokemon-list",
  moduleId: module.id,
  templateUrl: "pokemon-list-pro.component.html",
  styleUrls: ["./pokemon-list-pro.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListProComponent implements OnInit {
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

  public onLoadMoreItemsRequested(args: ListViewEventData) {
    console.log(`Loading more data`);
    this.store.dispatch(this.pokemonActions.loadMore());
    // TODO
    timerModule.setTimeout(function () {
      const listView = args.object;
      listView.notifyLoadOnDemandFinished();
    }, 1000);
  }

  public onPullToRefreshInitiated(args: ListViewEventData) {
    console.log(`ItemComponent - pull to refresh`);
    this.store.dispatch(this.pokemonActions.load());
    const that = new WeakRef(this);
    // TODO
    timerModule.setTimeout(function () {
      const listView = args.object;
      listView.notifyPullToRefreshFinished();
    }, 1000);
  }

  public showSideDrawer() {
    console.log("in showSideDrawer");
  }

}
