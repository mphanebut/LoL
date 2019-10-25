import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { NavigationServiceService, MenuItem } from './navigation-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NavigationServiceService]
})
export class NavigationComponent implements OnInit {
  mainMenuItems: MenuItem[];
  mainMenuItemsTest: MenuItem[];
  menu: MenuItem;
  // activeMenuItem$: Observable<MenuItem>;


  constructor(private route: ActivatedRoute, private router: Router, private NavigationService: NavigationServiceService) {
    this.mainMenuItemsTest = this.NavigationService.getMenuItemsArray();
    console.log(this.mainMenuItemsTest);
    // this.mainMenuItems = this.NavigationService.getMenuItems();
    // this.menu = this.NavigationService.extractMenu(route);
    // this.childItems = this.NavigationService.getRouteChildItems(this.mainMenuItems[0].childItems);
    // this.activeMenuItem$ = this.NavigationService.activeMenuItem$;
  }

  ngOnInit() {
  }
  toggleDropdown(el: HTMLElement, sib: HTMLElement, index: number) {
    // this.childItems = this.NavigationService.getRouteChildItems(this.mainMenuItems[index].childItems);
    el.classList.toggle('active');
    sib.classList.toggle('active');
  }

}

