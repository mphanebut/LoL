import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, filter, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { CardsListService } from '../cards-list.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('searchBox', { static: true }) searchBox: ElementRef<HTMLDivElement>;
  searchTerm$: Observable<string>;
  constructor(private cardService: CardsListService) { }

  ngOnInit() {
    this.searchTerm$ = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      debounceTime(500),
      map(event => (event.target as HTMLInputElement).value),
      tap(query => {
        if (query === '') { this.cardService.searchReset(); }
      }),
      filter(query => query !== ''),
      distinctUntilChanged()
    );

    this.searchTerm$.subscribe(term => {
      this.cardService.searchCards(term);
      console.log(term);
    });

  }

  onOpen() {
    this.searchBox.nativeElement.classList.toggle('active');
  }

  onClose() {
    this.searchBox.nativeElement.classList.toggle('active');
    this.searchInput.nativeElement.value = '';
    this.cardService.searchReset();
  }

}
