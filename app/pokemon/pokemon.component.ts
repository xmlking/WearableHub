import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements AfterViewInit {
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: SideDrawerType;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }
  openDrawer() {
    this.drawer.showDrawer();
  }
  closeDrawer() {
    this.drawer.closeDrawer();
  }
}

