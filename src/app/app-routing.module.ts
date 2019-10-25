import { NgModule } from '@angular/core';
import { Routes,
    RouterModule } from '@angular/router';
import { DashboardComponent } from './view-box/dashboard/dashboard.component';
import { MyBusinessOverviewComponent } from './view-box/my-business/my-business-overview/my-business-overview.component';
import { MyBusinessReviewsComponent } from './view-box/my-business/my-business-reviews/my-business-reviews.component';
import { AdvertisingOverviewComponent } from './view-box/advertising/advertising-overview/advertising-overview.component';
import { SearchAdvertisingComponent } from './view-box/advertising/search-advertising/search-advertising.component';
import { SearchAdvertisingOverviewComponent } from './view-box/advertising/search-advertising/search-advertising-overview/search-advertising-overview.component';
import { SearchAdvertisingPerformanceComponent } from './view-box/advertising/search-advertising/search-advertising-performance/search-advertising-performance.component';
import { FranchiseComponent } from './view-box/franchise/franchise.component';
import { LocationManagementComponent } from './view-box/franchise/location-management/location-management.component';
import { ChangeLogComponent } from './view-box/franchise/location-management/change-log/change-log.component';
import { AuthComponent } from './auth/auth.component';
import { TopComponent } from './view-box/roles/top/top.component';
import { JungleComponent } from './view-box/roles/jungle/jungle.component';
import { SupportComponent } from './view-box/roles/support/support.component';
import { CarryComponent } from './view-box/roles/carry/carry.component';
import { MidComponent } from './view-box/roles/mid/mid.component';
import { CurrentMatchComponent } from './view-box/match/current-match/current-match.component';
import { MatchHistoryComponent } from './view-box/match/match-history/match-history.component';
import { AllChampionsComponent } from './view-box/champion/all-champions/all-champions.component';
import { AllCardsComponent } from './view-box/cards/all-cards/all-cards.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      title: 'Dashboard',
      HeaderPageID: '3'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
      {
        path: 'home',
        redirectTo: 'home',
        data: {
          title: 'Home',
          icon: 'user'
        }
      }
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: AuthComponent
  },
  { path: 'role',
    data: {
      title: 'Roles',
      HeaderPageID: '1'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'top'
      },
      {
        path: 'top',
        component: TopComponent,
        data: {
          title: 'Top',
          icon: 'advertising_overview'
        }
      },
      {
        path: 'jungle',
        component: JungleComponent,
        data: {
          title: 'Jungle',
          icon: 'advertising_search'
        }
      },
      {
        path: 'middle',
        component: MidComponent,
        data: {
          title: 'Mid',
          icon: 'advertising_search'
        }
      },
      {
        path: 'carry',
        component: CarryComponent,
        data: {
          title: 'Carry',
          icon: 'advertising_search'
        }
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {
          title: 'Support',
          icon: 'advertising_search'
        }
      }
    ]
  },
  {
    path: 'match',
    data: {
      title: 'Match',
      HeaderPageID: '2'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current'
      },
      {
        path: 'current',
        component: CurrentMatchComponent,
        data: {
          title: 'Current Match',
          icon: 'my-business_overview'
        }
      },
      {
        path: 'history',
        component: MatchHistoryComponent,
        data: {
          title: 'Match History',
          icon: 'my-business_reviews'
        }
      }
    ]
  },
  {
    path: 'champion',
    data: {
      title: 'Champions',
      HeaderPageID: '3'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: AllChampionsComponent,
        data: {
          title: 'All Champions',
          icon: 'business_my_location'
        }
      }
    ]
  },
  {
    path: 'cards',
    data: {
      title: 'Cards',
      HeaderPageID: '4'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: AllCardsComponent,
        data: {
          title: 'All Cards',
          icon: 'business_my_location'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


