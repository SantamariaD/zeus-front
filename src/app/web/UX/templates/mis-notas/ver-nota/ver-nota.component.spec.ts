import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNotaComponent } from './ver-nota.component';

describe('VerNotaComponent', () => {
  let component: VerNotaComponent;
  let fixture: ComponentFixture<VerNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
