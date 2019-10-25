import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../summoner.service';
import { Summoner } from '../summoner.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrls: ['./summoner-card.component.css']
})
export class SummonerCardComponent implements OnInit {
  public currentSummoner: Summoner;
  private error: HttpErrorResponse;
  subscription: Subscription;
  // summonerChanged = new Subject<Summoner>();

  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    // this.getSummoner('AtlasOdysseus');
  }


  getSummoner(name: string) {
    this.summonerService.fetchSummoner(name).subscribe((data: Summoner) => this.currentSummoner = {
      profileIconId: data.profileIconId,
      name: data.name,
      puuid: data.puuid,
      summonerLevel: data.summonerLevel,
      accountId: data.accountId,
      id: data.id,
      revisionDate: data.revisionDate
    });
    // console.log(this.currentSummoner);
    // this.summonerChanged.next(this.currentSummoner);
  }

  getSummoner2(name: string) {
    this.summonerService.fetchSummoner(name)
      .subscribe(
        (data: Summoner) => this.currentSummoner = {
          ...data
        },
        error => this.error = error
      );
    // console.log(this.currentSummoner);
    // this.summonerChanged.next(this.currentSummoner);
  }


}
