import { Component, OnInit, Input } from '@angular/core';

import { FilterInput } from 'src/app/shared/Form/filter.model';
import { CardsListService } from '../cards-list.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.css']
})
export class CardFilterComponent implements OnInit {
  @Input() filterInputs: FilterInput[];
  originalInputs: FilterInput[];

  constructor(private cardService: CardsListService) { }

  ngOnInit() {
    this.originalInputs = _.cloneDeep(this.filterInputs);
  }

  filterChanged(e: HTMLInputElement) {
    if (e.name) {
      if (e.dataset.match) {
        this.cardService.updateFilter(e.name, e.dataset.match, e.value);
      } else {
        this.cardService.updateFilter(e.name, 'eq', e.value);
      }
    }
  }

  filterReset() {
    this.cardService.filterReset();
    this.filterInputs = this.originalInputs;
  }

}
