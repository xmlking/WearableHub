import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Item } from "./item.model";
import {
  ITEMS_RELOAD,
  ITEMS_ADD_MANY,
} from './item.reducer';
import { AppState, rootReducer } from '../../app.reducers';

@Injectable()
export class ItemService {
  private pageSize = 8;
  private items = [
    <Item>{ id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    <Item>{ id: 3, name: "Piqué", role: "Defender" },
    <Item>{ id: 4, name: "I. Rakitic", role: "Midfielder" },
    <Item>{ id: 5, name: "Sergio", role: "Midfielder" },
    <Item>{ id: 6, name: "Denis Suárez", role: "Midfielder" },
    <Item>{ id: 7, name: "Arda", role: "Midfielder" },
    <Item>{ id: 8, name: "A. Iniesta", role: "Midfielder" },
    <Item>{ id: 9, name: "Suárez", role: "Forward" },
    <Item>{ id: 10, name: "Messi", role: "Forward" },
    <Item>{ id: 11, name: "Neymar", role: "Forward" },
    <Item>{ id: 12, name: "Rafinha", role: "Midfielder" },
    <Item>{ id: 13, name: "Cillessen", role: "Goalkeeper" },
    <Item>{ id: 14, name: "Mascherano", role: "Defender" },
    <Item>{ id: 17, name: "Paco Alcácer", role: "Forward" },
    <Item>{ id: 18, name: "Jordi Alba", role: "Defender" },
    <Item>{ id: 19, name: "Digne", role: "Defender" },
    <Item>{ id: 20, name: "Sergi Roberto", role: "Midfielder" },
    <Item>{ id: 21, name: "André Gomes", role: "Midfielder" },
    <Item>{ id: 22, name: "Aleix Vidal", role: "Midfielder" },
    <Item>{ id: 23, name: "Umtiti", role: "Defender" },
    <Item>{ id: 24, name: "Mathieu", role: "Defender" },
    <Item>{ id: 25, name: "Masip", role: "Goalkeeper" }
  ];

  constructor(private store: Store<AppState>) {
  }

  loadItems() {
    let payload = this.items;
    let action = {type: ITEMS_RELOAD, payload: payload};
    this.store.dispatch(action);
  }

    getItems():  Observable<Item[]> {
      return this.store.select<Item[]>('items');
    }

  loadMoreItems(pageNumber: number) {
    let moreItems: Item[] = [];
    let currentItemSize = (pageNumber - 1) * this.pageSize;
    // Add one more page of items and return Observable
    for (let i = currentItemSize + 1; i <= currentItemSize + this.pageSize ; i++) {
      let newItem = new Item();
      newItem.id = i;
      newItem.name = `Item ${i}`;
      newItem.role = `Role ${i}`;

      moreItems.push(newItem);
    }
    let action = {type: ITEMS_ADD_MANY, payload: moreItems};
    this.store.dispatch(action);
  }

  getItem(id: number): Item {
    const itm = this.items.filter(item => item.id === id)[0];
    itm.image_source = `https://dummyimage.com/300x300&text=${itm.id}`;
    return itm;
  }
}
