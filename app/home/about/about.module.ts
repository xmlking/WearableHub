import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';
import { aboutRoutes } from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    aboutRoutes
  ],
  declarations: [
    AboutComponent
  ],
schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule { }
