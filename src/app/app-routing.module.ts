import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view-box/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { CurrentMatchComponent } from './view-box/match/current-match/current-match.component';
import { MatchHistoryComponent } from './view-box/match/match-history/match-history.component';
import { AllChampionsComponent } from './view-box/champion/all-champions/all-champions.component';
import { AllCardsComponent } from './view-box/cards/all-cards/all-cards.component';
import { CardDetailsComponent } from './view-box/cards/card-details/card-details.component';


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
      },
      {
        path: 'card/:cardCode',
        component: CardDetailsComponent,
      },
      {
        path: 'search',
        component: AllCardsComponent,
        data: {
          title: 'Search',
          icon: 'search'
        }
      },
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


