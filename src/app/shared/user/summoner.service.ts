import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Summoner } from './summoner.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  constructor(private http: HttpClient) { }
  // summonerEndpoint: string = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.SummonerName + '?api_key=RGAPI-db9f5792-53c4-4ad6-8165-9e99c0ab000f'
  fetchSummoner(SummonerName: string) {
    return this.http.get(
      'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + SummonerName  + '?api_key=RGAPI-db9f5792-53c4-4ad6-8165-9e99c0ab000f'
    );
  }

}

