import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as frameModule from "ui/frame";

import { Item } from "../services/item.model";
import { ItemService } from "../services/item.service";

@Component({
    selector: "app-item-detail",
    templateUrl: "item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

  public onNavBtnTap() {
    console.log('in  onNavBtnTap');
    frameModule.topmost().goBack();
  }

  public onDeleteTap() {
    console.log('onDeleteTap item id: ', this.item.id);
  }

}
