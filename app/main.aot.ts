// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from "./app.module.ngfactory";
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
