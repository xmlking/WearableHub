import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { Services } from './services';
import { Guards } from './guards';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    ...Services,
    ...Guards,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
