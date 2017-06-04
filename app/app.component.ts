import { Component } from "@angular/core";
import * as Platform from "platform";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-app",
    templateUrl: "app.component.html",
    // styleUrls: ["app.scss"]
})
export class AppComponent {
  public language: string;
  constructor(translate: TranslateService) {
    // this.language = translate.getBrowserLang();
    this.language = Platform.device.language.split("-")[0];
    // translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en"); // fallback

    translate.use(this.language.match(/en|es|fr|ru/) ? this.language : "en");
  }
}
