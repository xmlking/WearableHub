import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
    {
      path: "",
      loadChildren: "./landing/landing.module#LandingModule",
      data: {title: "Landing"}
    },
    {
      path: "about",
      loadChildren: "./about/about.module#AboutModule",
      data: {title: "About"}
    },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
