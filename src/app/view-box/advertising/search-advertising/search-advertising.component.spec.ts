import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertisingComponent } from './search-advertising.component';

describe('SearchAdvertisingComponent', () => {
  let component: SearchAdvertisingComponent;
  let fixture: ComponentFixture<SearchAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
