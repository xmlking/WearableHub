import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { PokemonRoutingModule } from "./pokemon-routing.module";

import { PokemonComponent } from "./pokemon.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonListProComponent } from "./pokemon-list-pro/pokemon-list-pro.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonService } from "./services/pokemon.service";
import { EffectsModule } from "@ngrx/effects";
import { PokemonEffects } from "./services/pokemon.effects";
import { PokemonActions } from "./services/pokemon.actions";

@NgModule({
  imports: [
    SharedModule,
    PokemonRoutingModule,
    EffectsModule.run(PokemonEffects),
  ],
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonListProComponent,
    PokemonDetailComponent,
  ],
  providers: [
    PokemonActions,
    PokemonService,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PokemonModule { }
