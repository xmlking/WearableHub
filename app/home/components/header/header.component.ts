import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";
import { Page } from "ui/page";
import "rxjs/add/operator/switchMap";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
private _routerSubscription;
  title = environment.APP_TITLE;
  pageTitle = "App";
  isCollapsed: boolean;

  constructor(page: Page, public router: Router,
              private pageRoute: PageRoute,
              private route: ActivatedRoute) {
    // page.actionBar.title = route.snapshot.data["title"];
    // this.pageTitle = route.snapshot.data["title"];
  }

  ngOnInit() {
    this.isCollapsed = true;



    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(() => this.route.snapshot.root)
    //   .map(root => {
    //     while (root.children && root.children.length) root = root.children[0];
    //     return root;
    //   })
    //   // .filter(route => route.outlet === 'primary')
    //   .map(root => root.data)
    //   .subscribe((data) =>  console.log("xxx:", data["title"]));


    this._routerSubscription = this.router.events
      .filter((event: any) => event instanceof NavigationEnd)
      .subscribe(() => {

      let root = this.router.routerState.snapshot.root;
      while (root) {
        if (root.children && root.children.length) {
          root = root.children[0];
        } else if (root.data && root.data["title"]) {
          this.pageTitle =  root.data["title"];
          return;
        } else {
          return;
        }
      }
    });
  }

  // setTitle($event) {
  //   this.router.data.map(data => data['title'])
  //     .do(key => console.log(key))
  //     .switchMap(key => this.translate.get(key))
  //     .subscribe(translation => this.titleService.setTitle(translation));
  // }

}
