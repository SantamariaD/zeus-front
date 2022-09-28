import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNotaTemplateComponent } from './crear-nota-template.component';

describe('CrearNotaTemplateComponent', () => {
  let component: CrearNotaTemplateComponent;
  let fixture: ComponentFixture<CrearNotaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNotaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNotaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
