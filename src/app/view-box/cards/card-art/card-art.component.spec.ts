import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtComponent } from './card-art.component';

describe('CardArtComponent', () => {
  let component: CardArtComponent;
  let fixture: ComponentFixture<CardArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
