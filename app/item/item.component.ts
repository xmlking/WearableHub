import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from "@ngrx/store";

import { Item } from "./services/item.model";
import { ItemService } from "./services/item.service";
import { AppState } from "../app.reducers";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private store: Store<AppState>, private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.loadItems();
    this.items = this.store.select<Item[]>('items');
  }
}
