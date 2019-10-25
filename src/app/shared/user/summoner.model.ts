export class Summoner {
  constructor(
    public profileIconId: number,
    public name: string,
    public puuid: string,
    public summonerLevel: number,
    public accountId: string,
    public id: string,
    public revisionDate: number
  ) {
    this.profileIconId = 0,
    this.name = '',
    this.puuid = '',
    this.summonerLevel = 0,
    this.accountId = '',
    this.id = '',
    this.revisionDate = 0;
  }
}
