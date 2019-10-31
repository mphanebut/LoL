import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Card } from 'src/app/shared/card/card.model';
import { Region } from 'src/app/shared/card/region.model';
import { FilterInput } from 'src/app/shared/Form/filter.model';
import { CardsListService } from '../cards-list.service';
import { SortOptions } from 'src/app/shared/Form/sort.model';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {
  cards: Observable<Card[]>;
  regions: Observable<Region[]>;
  region: Observable<Region>;

  title: string;
  regionRef: string;
  regionIcon: string;

  sortOptions: SortOptions[] = [
      {
        property: 'name',
        icon: { name: 'sort-AZ', title: 'Sort Alphabetically', viewBox: '0 0 511.626 511.627'},
        sortDirection: 'asc',
        isActive: true
      },
      {
        property: 'cost',
        icon: { name: 'cost', title: 'Cost', viewBox: '0 0 512 512'},
        sortDirection: 'desc',
        isActive: false
      },
      {
        property: 'attack',
        icon: { name: 'power', title: 'Attack', viewBox: '0 0 49.495 49.495'},
        sortDirection: 'desc',
        isActive: false
      },
      {
        property: 'health',
        icon: { name: 'heart', title: 'Health', viewBox: '0 -28 512.001 512'},
        sortDirection: 'desc',
        isActive: false
      },
      {
        property: 'rarity',
        icon: { name: 'my-business_reviews', title: 'Rarity', viewBox: '0 0 24 24'},
        sortDirection: 'desc',
        isActive: false
      }
  ];

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
    this.regions = this.cardsService.regions$;

    this.route.queryParamMap.subscribe(queryParams => {
        if (queryParams.get('region')) {
            this.region = this.cardsService.getRegion(queryParams.get('region'));
            if (this.region) {
                this.cardsService.updateFilter('regionRef', 'eq', queryParams.get('region'));
            }
        } else {
            this.cardsService.updateFilter('regionRef', 'eq', '');
        }
    });

  }
}
