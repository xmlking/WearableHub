import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { Components } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from "./landing/landing.component";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    LandingComponent,
    ...Components,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
