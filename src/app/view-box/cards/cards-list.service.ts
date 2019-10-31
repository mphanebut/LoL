import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/shared/card/card.model';
import { Globals, Region } from 'src/app/shared/card/region.model';
import { Filter } from 'src/app/shared/Form/filter.model.js';
import { SortOptions } from 'src/app/shared/Form/sort.model';

import cardSet from '../../../assets/datadragon-set1-en_us/en_us/data/set1-en_us.json';
import globalSet from '../../../assets/datadragon-set1-en_us/en_us/data/globals-en_us.json';

@Injectable({
  providedIn: 'root'
})
export class CardsListService {

  private cardSet: Card[] = cardSet;
  private globals: Globals = globalSet;
  private regionSet: Region[] = this.globals.regions;

  private cards: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>(this.cardSet);
  public cards$: Observable<Card[]> =  this.cards.asObservable();

  private regions: BehaviorSubject<Region[]> = new BehaviorSubject<Region[]>(this.regionSet);
  public regions$: Observable<Region[]> =  this.regions.asObservable();

  private filters = new Subject<Filter[]>();
  public filters$: Observable<Filter[]> =  this.filters.asObservable();

  private currentCards: Card[] = Object.assign(this.cards.getValue());
  private currentFilters: Filter[] = [];
  private currentSort: SortOptions;

  constructor() {
    this.filters$.subscribe((newFilters: Filter[]) => {
      this.currentFilters = newFilters;
      this.filterCards(newFilters);
    });
  }

  getCard(cardCode?: string, index?: number): Observable<Card> {
    if (name) {
      return this.cards.pipe(
        map(cards => cards.find(card => card.cardCode === cardCode))
      );
    } else if (index) {
      return this.cards.pipe(
        map(cards => cards[index])
      );
    }
  }

  getRegion(name?: string, index?: number): Observable<Region> {
    if (name) {
      return this.regions.pipe(
        map(regions => regions.find(region => region.nameRef.toLowerCase() === name.toLowerCase()))
      );
    } else if (index) {
      return this.regions.pipe(
        map(regions => regions[index])
      );
    }
  }

  nextCards() {
    this.cards.next(this.currentCards);
  }

  // FILTERS

  nextFilters() {
    this.filters.next(this.currentFilters);
  }

  filterCards(newFilters: Filter[]) {
    this.currentCards = this.cardSet;
    newFilters.forEach(obj => this.currentCards = this.filterCardsArray(this.currentCards, obj.property, obj.match, obj.value));
    this.nextCards();
  }

  addFilter(property: string, comparison: string, value: string) {
    this.currentFilters.push(new Filter(property, comparison, value, true));
    this.nextFilters();
  }

  updateFilter(property: string, comparison: string, value: string) {
    const currentIndex = this.currentFilters.findIndex(obj => obj.property === property);
    if (value === '' || value === 'All') {
      this.currentFilters.splice(currentIndex, 1);
      this.nextFilters();
    } else {
      if (currentIndex !== -1) {
        this.currentFilters[currentIndex].value = value;
        this.currentFilters[currentIndex].match = comparison;
        this.nextFilters();
      } else {
        this.addFilter(property, comparison, value);
      }
    }
  }


  filterCardsArray(set: Card[], property: string, comparison: string, value: string): Card[] {
    return set.filter(card => {
      if (card.hasOwnProperty(property)) {
        if (typeof card[property] === 'boolean') {
          return card[property].toString() === value;
        } else {
          switch (comparison) {
            case 'gt':
              return card[property] > value;
            case 'gte':
              return card[property] >= value;
            case 'lt':
              return card[property] < value;
            case 'lte':
              return card[property] <= value;
            case 'nne':
              return !(card[property] = value);
            case 'ne':
              return !(card[property].toLowerCase() === value.toLowerCase());
            case 'eq':
              return card[property].toLowerCase() === value.toLowerCase();
            default:
              return card[property] = value;
          }
        }
      } else {
        return 0;
      }
    });
  }

  filterReset() {
    this.currentFilters = [];
    this.nextFilters();
    if (this.currentSort) {
      this.sortCards(this.currentSort);
    }
  }

  // SEARCH

  searchCards(searchTerm: string) {
    this.currentCards = this.cards.getValue().filter(card => card.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    this.nextCards();
  }

  searchReset() {
    this.filterCards(this.currentFilters);
  }

  // SORT

  sortCards(sortOption: SortOptions) {
    if (this.currentSort === sortOption ) {
      if (this.currentSort.sortDirection === 'asc') {
        this.currentCards.sort(this.compareValues(sortOption.property, 'desc'));
        this.currentSort.sortDirection = 'desc';
      } else {
        this.currentCards.sort(this.compareValues(sortOption.property, 'asc'));
        this.currentSort.sortDirection = 'asc';
      }
    } else {
      this.currentCards.sort(this.compareValues(sortOption.property, sortOption.sortDirection));
    }
    this.currentSort = sortOption;
    this.nextCards();
  }

  compareValues(key: any, order: string = 'asc') {
    return (a: any, b: any) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  sortReset() {
    this.filterCards(this.currentFilters);
    this.currentSort = undefined;
  }

}
