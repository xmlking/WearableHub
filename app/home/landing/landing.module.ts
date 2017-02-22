import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LandingComponent } from './landing.component';
import { landingRoutes } from './landing-routing.module';

@NgModule({
  imports: [
    SharedModule,
    landingRoutes,
  ],
  declarations: [
    // LandingComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LandingModule { }
