import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';

import { SharedModule } from "../shared/shared.module";
import { ItemRoutingModule } from "./item-routing.module";

import { ItemComponent } from "./item.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemService } from "./services/item.service";

@NgModule({
  imports: [
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [
    // LISTVIEW_DIRECTIVES,
    ItemComponent,
    ItemDetailComponent,
  ],
  providers: [
    ItemService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemModule { }
