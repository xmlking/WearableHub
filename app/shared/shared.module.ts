import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

/* Lib */
import { MomentModule } from 'angular2-moment';
import {TranslateModule} from 'ng2-translate';

/* App */
import {Pipes} from './pipes';
import {Components} from './components';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule
  ],
  declarations: [
    ...Components,
    ...Pipes,
  ],
  exports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    TranslateModule,
    MomentModule,
    ...Components,
    ...Pipes,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
}
