import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Routes, Route } from '@angular/router';

export interface MenuItem {
  path: string;
  title: string;
  active: boolean;
  icon?: string;
  itemRoute?: Route;
  childItems?: Routes;
}

export interface MenuItemArray {
  path: string;
  title: string;
  icon?: string;
  active: boolean;
  childItems?: MenuItemArray[];
}

export interface FullMenu {
  name: string;
  MenuItems?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  // activeMenuItem$: Observable<MenuItem>;
  constructor(private router: Router) {
    }

    getMenuItemsArray(): MenuItemArray[] {
      return this.router.config
        .filter(route => route.data && route.data.title /*SEND TO SERVICE*/)
        .map(route => {
            return {
              path: route.path,
              title: route.data.title,
              active: false,
              icon: route.data.icon,
              itemRoute: route,
              childItems: this.getRouteChildItems(route.children)
            };
        });
    }

    getRouteChildItems(Parent: Routes): MenuItemArray[] {
      if (Parent) {
        return Parent
        .filter(routeItem => routeItem.data && routeItem.data.title /*SEND TO SERVICE*/)
        .map(routeItem => {
            return {
              path: routeItem.path,
              title: routeItem.data.title,
              active: false,
              icon: routeItem.data.icon,
              itemRoute: routeItem,
              childItems: this.getRouteChildItems(routeItem.children)
            };
        });
      } else {
        return null;
      }
  }

    // getMenuItems(): MenuItem[] {
    //   return this.router.config
    //     .filter(route => route.data && route.data.title )
    //     .map(route => {
    //         return {
    //           path: route.path,
    //           title: route.data.title,
    //           icon: route.data.icon,
    //           active: false,
    //           childItems: route.children
    //         };
    //     });
    // }

    // getChildItems(item: MenuItem): MenuItem[] {
    //     return item.childItems
    //     .filter(route => route.data && route.data.title)
    //     .map(route => {
    //         return {
    //           path: route.path,
    //           title: route.data.title,
    //           icon: route.data.icon,
    //           active: false,
    //           childItems: route.children
    //         };
    //     });
    // }

    // private lastRouteWithMenuItem(route: ActivatedRoute): MenuItem {
    //   let lastMenu = undefined;
    //   do { lastMenu = this.extractMenu(route) || lastMenu; }
    //   while ((route = route.firstChild));
    //   return lastMenu;
    // }
    // private extractMenu(route: ActivatedRoute): MenuItem {
    //     let cfg = route.routeConfig;
    //     return cfg && cfg.data && cfg.data.title
    //         ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon, active: false }
    //         : undefined;
    // }
}
