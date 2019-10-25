import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessOverviewComponent } from './my-business-overview.component';

describe('MyBusinessOverviewComponent', () => {
  let component: MyBusinessOverviewComponent;
  let fixture: ComponentFixture<MyBusinessOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusinessOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusinessOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
