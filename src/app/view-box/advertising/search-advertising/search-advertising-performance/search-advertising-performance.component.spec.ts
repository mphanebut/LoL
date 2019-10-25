import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertisingPerformanceComponent } from './search-advertising-performance.component';

describe('SearchAdvertisingPerformanceComponent', () => {
  let component: SearchAdvertisingPerformanceComponent;
  let fixture: ComponentFixture<SearchAdvertisingPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertisingPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertisingPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
