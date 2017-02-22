import { Component } from "@angular/core";
import * as Platform from "platform";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    // styleUrls: ['app.scss']
})
export class AppComponent {
  public language: string;
  constructor(translate: TranslateService) {
    this.language = Platform.device.language;
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("en");
    translate.use(Platform.device.language.split("-")[0]);
  }
}
