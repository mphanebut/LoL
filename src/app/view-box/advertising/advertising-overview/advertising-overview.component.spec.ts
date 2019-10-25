import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingOverviewComponent } from './advertising-overview.component';

describe('AdvertisingOverviewComponent', () => {
  let component: AdvertisingOverviewComponent;
  let fixture: ComponentFixture<AdvertisingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
