import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-telerik-ui-pro/listview';
import { Page } from 'ui/page';
import * as timerModule  from "timer";

import { Item } from "./services/item.model";
import { ItemService } from "./services/item.service";
import { AppState } from "../app.reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {
  items: Observable<Item[]>;
  itemList: RadListView;

  itemPagesLoaded: number;
  pageSize = 8;

  // Pull to refresh/load on demand status
  pullToRefreshInProgress = false;
  loadOnDemandInProgress = false;

  constructor(private page: Page,
              private store: Store<AppState>,
              private changeDetectionRef: ChangeDetectorRef,
              private itemService: ItemService) { }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit....');
  }

  ngOnInit(): void {
    console.log('ngOnInit....');

    this.itemPagesLoaded = 1;

    this.itemList = <RadListView>this.page.getViewById('itemList');

    this.items = null;

    this.itemService.loadItems();

    this.items = this.store.select<Item[]>('items');

    this.changeDetectionRef.detectChanges();

    this.items.subscribe(
      items => {

        console.log(`-----Items list changed`);

        if (this.itemList) {

          if (this.pullToRefreshInProgress) {
            this.itemList.notifyPullToRefreshFinished();
            this.pullToRefreshInProgress = false;
          }

          if (this.loadOnDemandInProgress) {
            this.itemList.notifyLoadOnDemandFinished();
            this.loadOnDemandInProgress = false;
          }

        }

        setTimeout( () => {

          // If current page > 1, scroll to index
          if (this.itemPagesLoaded > 1) {
            let toIndex = (this.itemPagesLoaded - 1) * this.pageSize;

            if (this.itemList.items && toIndex < this.itemList.items.length) {
              this.itemList.scrollToIndex(toIndex);
            }
          }

        }, 500);

      }
    );

  }


  public onLoadMoreItemsRequested(args: ListViewEventData) {
    console.log(`Loading more data`);
    this.loadOnDemandInProgress = true;
    this.itemPagesLoaded++;
    this.itemService.loadMoreItems(this.itemPagesLoaded);
  }

  public onPullToRefreshInitiated1(args: ListViewEventData) {
    console.log(`ItemComponent - pull to refresh`);
    // this.pullToRefreshInProgress = true;
    // Reset pages of item records loaded
    // this.itemPagesLoaded = 1;
    // this.itemService.loadItems();
    this.itemList.notifyPullToRefreshFinished();
  }

  public onPullToRefreshInitiated(args: ListViewEventData) {
    console.log(`ItemComponent - pull to refresh`);
    const that = new WeakRef(this);
    timerModule.setTimeout(function () {
      // TODO
      const listView = args.object;
      listView.notifyPullToRefreshFinished();
    }, 1000);
  }

  public showSideDrawer() {
    console.log('in showSideDrawer');
  }

}
