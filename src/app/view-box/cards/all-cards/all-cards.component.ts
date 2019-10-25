import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

import { Card } from 'src/app/shared/card/card.model';
import { Filter } from 'src/app/shared/Form/filter.model';
import { CardsListService } from '../cards-list.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit, OnDestroy {
  filteredCards: Card[];
  regionFilter: string;
  filtersChanged = new Subject<Filter[]>();
  cardTypeFilter: string;
  filterSelected: ElementRef;
  private cards: Card[];
  private filters: Filter[] = [];
  private currentSearchTerm: string;
  private subscription: Subscription;

  get searchTerm(): string {
    return this.currentSearchTerm;
  }
  set searchTerm(value: string) {
    this.currentSearchTerm = value;
    if (!this.currentSearchTerm.length) {
      this.filteredCards = this.cards;
    }
    this.filteredCards = this.cardsService.searchCards(this.filteredCards, value);
  }

  constructor(private cardsService: CardsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cards = this.cardsService.getCards();
    // this.cards = this.cardsService.sortCards(this.filteredCards, 'Name', 'asc');

    console.log(this.cards);

    this.subscription = this.filtersChanged.subscribe((newFilters: Filter[]) => {
      this.filteredCards = this.cards;
      newFilters.forEach(obj => this.filteredCards = this.cardsService.filterCards(this.filteredCards, obj.property, obj.match, obj.value));
    });

    this.route.queryParamMap.subscribe(queryParams => {
      if (queryParams.get('region')) {
        this.updateFilter('regionRef', 'eq', queryParams.get('region'));
      } else {
        this.updateFilter('regionRef', 'eq', '');
      }
    });

  }

  filterCards(property: string, comparison: string, value: string) {
    this.filteredCards = this.cardsService.filterCards(this.filteredCards, property, comparison, value);
  }

  filterChanged(e) {
    if (e.currentTarget.name) {
      if (e.currentTarget.dataset.match) {
        this.updateFilter(e.currentTarget.name, e.currentTarget.dataset.match, e.currentTarget.value);
      } else {
        this.updateFilter(e.currentTarget.name, 'eq', e.currentTarget.value);
      }
    } else {
      console.log('missing data for filter');
    }
  }

  filterSort(property: string, comparison: string) {
    this.filteredCards = this.cardsService.sortCards(this.filteredCards, property, comparison);
  }

  sortChanged(e) {
    if (e.currentTarget.dataset.hasOwnProperty('sort')) {
      document.querySelectorAll('.sort.icons a:not([data-sort=\'Name\']').forEach( (el: HTMLElement) => el.classList.remove('active') );
      e.currentTarget.classList.toggle('active');
      if (e.currentTarget.classList.contains('active')) {
        this.filterSort(e.currentTarget.dataset.sort, 'desc');
      } else {
        this.filterSort(e.currentTarget.dataset.sort, 'desc');
      }
    } else {
      console.log('missing data for sort');
    }
  }

  updateFilter(property: string, comparison: string, value: string) {
    const currentIndex = this.filters.findIndex(obj => obj.property === property);
    if (value === '' || value === 'All') {
      this.filters.splice(currentIndex, 1);
      this.filtersChanged.next(this.filters);
    } else {
      if (currentIndex !== -1) {
        // this.filters.find(obj => obj.property === 'regionRef').value = this.regionFilter;
        this.filters[currentIndex].value = value;
        this.filters[currentIndex].match = comparison;
        this.filtersChanged.next(this.filters);
      } else {
        this.filters.push(new Filter(property, comparison, value));
        this.filtersChanged.next(this.filters);
      }
    }
  }

  filterReset() {
    this.filteredCards = this.cards;
  }

  sortReset() {
    this.filterSort('Name', 'asc');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
