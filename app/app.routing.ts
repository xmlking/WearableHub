import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home",     loadChildren: "./home/home.module#HomeModule" },
  { path: "pokemon",  loadChildren: "./pokemon/pokemon.module#PokemonModule"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
