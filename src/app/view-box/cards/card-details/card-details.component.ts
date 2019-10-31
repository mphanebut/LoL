import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit, OnDestroy  {
  private params$: Subscription;
  public cardCode: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.params$ = this.route.params.subscribe(params => {
      this.cardCode = params.cardCode;
   });
  }

  ngOnDestroy() {
    this.params$.unsubscribe();
  }

}
