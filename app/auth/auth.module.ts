import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedModule } from "../shared/shared.module";
import * as appSettings from "application-settings";

import { AuthHttp, AuthConfig } from "angular2-jwt";
import { Http, RequestOptions } from "@angular/http";

// http://stackoverflow.com/questions/38718799/nativescript-authenticating-at-backend-web-api
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: "token",
    tokenGetter: (() => appSettings.getString("token")),
    globalHeaders: [{"Content-Type": "application/json"}],
  }), http, options);
}

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  entryComponents: [LoginComponent, SignupComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule {}
