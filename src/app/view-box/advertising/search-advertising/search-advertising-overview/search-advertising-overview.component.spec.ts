import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertisingOverviewComponent } from './search-advertising-overview.component';

describe('SearchAdvertisingOverviewComponent', () => {
  let component: SearchAdvertisingOverviewComponent;
  let fixture: ComponentFixture<SearchAdvertisingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertisingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertisingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
