import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/card/card.model';
import cardSet from '../../../assets/datadragon-set1-en_us/en_us/data/set1-en_us.json';

@Injectable({
  providedIn: 'root'
})
export class CardsListService {

  private cards: Card[] = cardSet;
  constructor() {
  }

  getCards() {
    return this.cards.slice();
  }

  getCard(index: number) {
    return this.cards[index];
  }

  filterCards(set: Card[], property: string, comparison: string, value: string) {
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

  sortCards(set: Card[], property: string, comparison: string) {
    return set.sort(this.compareValues(property, comparison));
  }

  searchCards(set: Card[], searchTerm: string) {
    return set.filter( card =>
      card.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1
    );
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

}
