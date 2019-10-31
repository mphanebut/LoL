import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CardsListService } from '../cards-list.service';
import { SortOptions } from 'src/app/shared/Form/sort.model';

@Component({
  selector: 'app-card-sort',
  templateUrl: './card-sort.component.html',
  styleUrls: ['./card-sort.component.css']
})
export class CardSortComponent implements OnInit {
  @Input() sortOptions: SortOptions[];
  @ViewChild('sortBox', { static: true }) sortBox: ElementRef<HTMLDivElement>;
  sortElements: NodeListOf<Element>;
  constructor(private cardService: CardsListService) { }

  ngOnInit() {
    this.sortElements = this.sortBox.nativeElement.querySelectorAll('.sort.icons a');
    this.sortOptions.forEach((option, index) => {
      if (option.isActive) {
        this.filterSort(this.sortOptions[index]);
      }
    });
  }

  sortChanged(e: HTMLAnchorElement, index: number) {
    this.sortBox.nativeElement.querySelectorAll('.sort.icons a:not([data-sort=' + e.dataset.sort + ']').forEach( (el: Element) => el.classList.remove('active') );
    if (this.sortOptions[index]) {
      e.classList.add('active');
      this.filterSort(this.sortOptions[index]);
    }
  }

  filterSort(sortOption: SortOptions) {
    this.cardService.sortCards(sortOption);
  }

  sortReset() {
    this.cardService.sortReset();
    this.sortElements.forEach( (el: Element) => el.classList.remove('active') );
  }

}
