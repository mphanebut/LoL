import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewBoxComponent } from './view-box/view-box.component';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './view-box/dashboard/dashboard.component';
import { NavigationPageComponent } from './navigation/navigation-page/navigation-page.component';
import { SvgComponent } from './shared/svg/svg.component';
import { SummonerCardComponent } from './shared/user/summoner-card/summoner-card.component';
import { ApiInterceptor } from './shared/user/api-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { CurrentMatchComponent } from './view-box/match/current-match/current-match.component';
import { MatchHistoryComponent } from './view-box/match/match-history/match-history.component';
import { TopComponent } from './view-box/roles/top/top.component';
import { JungleComponent } from './view-box/roles/jungle/jungle.component';
import { MidComponent } from './view-box/roles/mid/mid.component';
import { CarryComponent } from './view-box/roles/carry/carry.component';
import { SupportComponent } from './view-box/roles/support/support.component';
import { AllChampionsComponent } from './view-box/champion/all-champions/all-champions.component';
import { AllCardsComponent } from './view-box/cards/all-cards/all-cards.component';
import { ClickActiveDirective } from './shared/directives/click-active.directive';
import { DdPanelDirective } from './shared/directives/dd-panel.directive';
import { CardFilterComponent } from './view-box/cards/card-filter/card-filter.component';
import { CardSearchComponent } from './view-box/cards/card-search/card-search.component';
import { CardRegionComponent } from './view-box/cards/card-region/card-region.component';
import { CardSortComponent } from './view-box/cards/card-sort/card-sort.component';
import { CardArtComponent } from './view-box/cards/card-art/card-art.component';
import { CardDetailsComponent } from './view-box/cards/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ViewBoxComponent,
    SplashComponent,
    DashboardComponent,
    NavigationPageComponent,
    SvgComponent,
    SummonerCardComponent,
    AuthComponent,
    CurrentMatchComponent,
    MatchHistoryComponent,
    TopComponent,
    JungleComponent,
    MidComponent,
    CarryComponent,
    SupportComponent,
    AllChampionsComponent,
    AllCardsComponent,
    ClickActiveDirective,
    DdPanelDirective,
    CardFilterComponent,
    CardSearchComponent,
    CardRegionComponent,
    CardSortComponent,
    CardArtComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
