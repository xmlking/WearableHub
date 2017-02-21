import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/pokemon", pathMatch: "full" },
  { path: 'items',  loadChildren: './item/item.module#ItemModule'},
  { path: 'pokemon',  loadChildren: './pokemon/pokemon.module#PokemonModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
