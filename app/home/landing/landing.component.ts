import { Component, OnDestroy, OnInit } from "@angular/core";
import "rxjs/add/observable/of";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}


