import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Card } from 'src/app/shared/card/card.model';
import { Region } from 'src/app/shared/card/region.model';
import { FilterInput } from 'src/app/shared/Form/filter.model';
import { CardsListService } from '../cards-list.service';

@Component({
  selector: 'app-card-region',
  templateUrl: './card-region.component.html',
  styleUrls: ['./card-region.component.css']
})
export class CardRegionComponent implements OnInit {
  cards: Observable<Card[]>;
  region: Observable<Region>;

  currentRegion: Region;
  title: string;
  regionRef: string;
  regionIcon: string;

  filterInputs: FilterInput[] = [
    { title: 'Card Type',
      property: 'type',
      filters: [
        { value: '', label: 'All', isChecked: true },
        { value: 'unit', label: 'Unit' },
        { value: 'spell', label: 'Spell' },
      ]
    },
    { title: 'Collectible',
      property: 'collectible',
      filters: [
        { value: '', label: 'All', isChecked: true },
        { value: 'true', label: 'True' },
        { value: 'false', label: 'False' },
      ]
    },
    { title: 'Spell Speed',
      property: 'spellSpeed',
      filters: [
        { value: '', label: 'All', isChecked: true },
        { value: 'fast', label: 'Fast' },
        { value: 'slow', label: 'Slow' },
      ]
    },
    { title: 'Rarity',
      property: 'rarity',
      filters: [
        { value: '', label: 'All', isChecked: true },
        { value: 'common', label: 'Common' },
        { value: 'rare', label: 'Rare' },
        { value: 'epic', label: 'Epic' },
        { value: 'champion', label: 'Champion' },
      ]
    }
  ];

  constructor(private cardsService: CardsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cards = this.cardsService.cards$;
    // this.region.subscribe(data => {
    //   this.currentRegion = data;
    // });

    this.region = this.cardsService.getRegion(this.route.snapshot.routeConfig.path);
    if (this.region) {
      this.cardsService.updateFilter('regionRef', 'eq', this.regionRef);
    }

  }

}
