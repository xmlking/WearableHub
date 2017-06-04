import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonComponent } from "./pokemon.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonListProComponent } from "./pokemon-list-pro/pokemon-list-pro.component";

const routes: Routes = [
  {
    path: "", component: PokemonComponent, children: [
      {
        path: "",
        component: PokemonListComponent
      },
      {
        path: "pro",
        component: PokemonListProComponent
      },
      {
        path: ":id",
        component: PokemonDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
