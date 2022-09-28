import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnoComponent } from './card-uno.component';

describe('CardUnoComponent', () => {
  let component: CardUnoComponent;
  let fixture: ComponentFixture<CardUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
