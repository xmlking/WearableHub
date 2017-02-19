import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { AppState, rootReducer } from './app.reducers';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
      NativeScriptModule,
      NativeScriptRouterModule,
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),
      AuthModule,
      CoreModule,
      AppRoutingModule,
      StoreModule.provideStore(rootReducer),
      RouterStoreModule.connectRouter(),
      StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
