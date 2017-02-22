import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
    {
      path: '',
      component: LandingComponent,
      data: {title: 'Home'}
    },
    // TODO : double lazy loading not working
    // {
    //   path: '',
    //   loadChildren: './landing/landing.module#LandingModule',
    //   data: {pageTitle: 'Home'}
    // },
    {
      path: 'about',
      loadChildren: './about/about.module#AboutModule',
      data: {title: 'About'}
    },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
