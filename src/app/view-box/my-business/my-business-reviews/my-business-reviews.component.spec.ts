import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessReviewsComponent } from './my-business-reviews.component';

describe('MyBusinessReviewsComponent', () => {
  let component: MyBusinessReviewsComponent;
  let fixture: ComponentFixture<MyBusinessReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusinessReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusinessReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
