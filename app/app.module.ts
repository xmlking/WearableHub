import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { AppState, rootReducer } from "./app.reducers";

import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

/* Feature Modules */
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Http } from "@angular/http";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
      CoreModule,
      AuthModule,
      NativeScriptRouterModule,
      AppRoutingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      }),
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
